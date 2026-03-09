/**
 * PhoneInput Component
 * Shows flag emoji + country code (+1) that auto-updates as you type
 */

import React, { useState, useEffect, useRef } from 'react';
import { parsePhoneNumber, getCountryCallingCode, CountryCode, AsYouType } from 'libphonenumber-js';
import { detectUserCountry } from '../../utils/countryDetection';

interface PhoneInputProps {
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  error?: string;
  className?: string;
  disabled?: boolean;
}

// Comprehensive country code to flag emoji mapping (200+ countries)
const COUNTRY_FLAGS: Record<string, string> = {
  // North America
  US: '🇺🇸', CA: '🇨🇦', MX: '🇲🇽',
  // Europe
  GB: '🇬🇧', FR: '🇫🇷', DE: '🇩🇪', IT: '🇮🇹', ES: '🇪🇸', NL: '🇳🇱',
  BE: '🇧🇪', CH: '🇨🇭', AT: '🇦🇹', PT: '🇵🇹', SE: '🇸🇪', NO: '🇳🇴',
  DK: '🇩🇰', FI: '🇫🇮', PL: '🇵🇱', GR: '🇬🇷', IE: '🇮🇪', CZ: '🇨🇿',
  RO: '🇷🇴', HU: '🇭🇺', SK: '🇸🇰', BG: '🇧🇬', HR: '🇭🇷', RS: '🇷🇸',
  SI: '🇸🇮', LT: '🇱🇹', LV: '🇱🇻', EE: '🇪🇪', LU: '🇱🇺', IS: '🇮🇸',
  MT: '🇲🇹', CY: '🇨🇾', UA: '🇺🇦', BY: '🇧🇾', MD: '🇲🇩', AL: '🇦🇱',
  BA: '🇧🇦', MK: '🇲🇰', ME: '🇲🇪', XK: '🇽🇰',
  // Asia
  CN: '🇨🇳', JP: '🇯🇵', IN: '🇮🇳', KR: '🇰🇷', SG: '🇸🇬', HK: '🇭🇰',
  TW: '🇹🇼', TH: '🇹🇭', MY: '🇲🇾', PH: '🇵🇭', VN: '🇻🇳', ID: '🇮🇩',
  PK: '🇵🇰', BD: '🇧🇩', LK: '🇱🇰', MM: '🇲🇲', KH: '🇰🇭', LA: '🇱🇦',
  NP: '🇳🇵', BT: '🇧🇹', MV: '🇲🇻', MN: '🇲🇳', KZ: '🇰🇿', UZ: '🇺🇿',
  TM: '🇹🇲', KG: '🇰🇬', TJ: '🇹🇯', AF: '🇦🇫', AM: '🇦🇲', AZ: '🇦🇿',
  GE: '🇬🇪', TR: '🇹🇷', IL: '🇮🇱', SA: '🇸🇦', AE: '🇦🇪', QA: '🇶🇦',
  KW: '🇰🇼', BH: '🇧🇭', OM: '🇴🇲', JO: '🇯🇴', LB: '🇱🇧', SY: '🇸🇾',
  IQ: '🇮🇶', YE: '🇾🇪', PS: '🇵🇸', IR: '🇮🇷',
  // Oceania
  AU: '🇦🇺', NZ: '🇳🇿', FJ: '🇫🇯', PG: '🇵🇬', NC: '🇳🇨', PF: '🇵🇫',
  WS: '🇼🇸', GU: '🇬🇺', TO: '🇹🇴', VU: '🇻🇺', SB: '🇸🇧', FM: '🇫🇲',
  KI: '🇰🇮', MH: '🇲🇭', PW: '🇵🇼', NR: '🇳🇷', TV: '🇹🇻',
  // South America
  BR: '🇧🇷', AR: '🇦🇷', CL: '🇨🇱', CO: '🇨🇴', PE: '🇵🇪', VE: '🇻🇪',
  EC: '🇪🇨', BO: '🇧🇴', PY: '🇵🇾', UY: '🇺🇾', GY: '🇬🇾', SR: '🇸🇷',
  GF: '🇬🇫', FK: '🇫🇰',
  // Central America & Caribbean
  GT: '🇬🇹', HN: '🇭🇳', SV: '🇸🇻', NI: '🇳🇮', CR: '🇨🇷', PA: '🇵🇦',
  BZ: '🇧🇿', CU: '🇨🇺', JM: '🇯🇲', HT: '🇭🇹', DO: '🇩🇴', TT: '🇹🇹',
  BS: '🇧🇸', BB: '🇧🇧', LC: '🇱🇨', GD: '🇬🇩', VC: '🇻🇨', AG: '🇦🇬',
  DM: '🇩🇲', KN: '🇰🇳', PR: '🇵🇷', VI: '🇻🇮', TC: '🇹🇨', KY: '🇰🇾',
  BM: '🇧🇲', AW: '🇦🇼', CW: '🇨🇼', SX: '🇸🇽', BQ: '🇧🇶',
  // Africa
  ZA: '🇿🇦', EG: '🇪🇬', NG: '🇳🇬', KE: '🇰🇪', ET: '🇪🇹', GH: '🇬🇭',
  TZ: '🇹🇿', UG: '🇺🇬', DZ: '🇩🇿', MA: '🇲🇦', TN: '🇹🇳', LY: '🇱🇾',
  SD: '🇸🇩', SS: '🇸🇸', SO: '🇸🇴', DJ: '🇩🇯', ER: '🇪🇷', AO: '🇦🇴',
  MZ: '🇲🇿', ZM: '🇿🇲', ZW: '🇿🇼', BW: '🇧🇼', NA: '🇳🇦', MW: '🇲🇼',
  MG: '🇲🇬', MU: '🇲🇺', SC: '🇸🇨', RE: '🇷🇪', YT: '🇾🇹', KM: '🇰🇲',
  SN: '🇸🇳', ML: '🇲🇱', MR: '🇲🇷', NE: '🇳🇪', TD: '🇹🇩', CM: '🇨🇲',
  CF: '🇨🇫', CG: '🇨🇬', CD: '🇨🇩', GA: '🇬🇦', GQ: '🇬🇶', ST: '🇸🇹',
  BJ: '🇧🇯', TG: '🇹🇬', CI: '🇨🇮', BF: '🇧🇫', GN: '🇬🇳', GW: '🇬🇼',
  LR: '🇱🇷', SL: '🇸🇱', GM: '🇬🇲', CV: '🇨🇻', LS: '🇱🇸', SZ: '🇸🇿',
  RW: '🇷🇼', BI: '🇧🇮',
};

// Comprehensive calling code to country mapping (ALL countries)
const CALLING_CODE_TO_COUNTRY: Record<string, CountryCode> = {
  // North America
  '1': 'US', // US, Canada, Caribbean nations
  '52': 'MX',
  // Europe
  '44': 'GB', '33': 'FR', '49': 'DE', '39': 'IT', '34': 'ES', '31': 'NL',
  '32': 'BE', '41': 'CH', '43': 'AT', '351': 'PT', '46': 'SE', '47': 'NO',
  '45': 'DK', '358': 'FI', '48': 'PL', '30': 'GR', '353': 'IE', '420': 'CZ',
  '40': 'RO', '36': 'HU', '421': 'SK', '359': 'BG', '385': 'HR', '381': 'RS',
  '386': 'SI', '370': 'LT', '371': 'LV', '372': 'EE', '352': 'LU', '354': 'IS',
  '356': 'MT', '357': 'CY', '380': 'UA', '375': 'BY', '373': 'MD', '355': 'AL',
  '387': 'BA', '389': 'MK', '382': 'ME', '383': 'XK',
  // Asia
  '86': 'CN', '81': 'JP', '91': 'IN', '82': 'KR', '65': 'SG', '852': 'HK',
  '886': 'TW', '66': 'TH', '60': 'MY', '63': 'PH', '84': 'VN', '62': 'ID',
  '92': 'PK', '880': 'BD', '94': 'LK', '95': 'MM', '855': 'KH', '856': 'LA',
  '977': 'NP', '975': 'BT', '960': 'MV', '976': 'MN', '7': 'KZ', // Russia also uses 7
  '998': 'UZ', '993': 'TM', '996': 'KG', '992': 'TJ', '93': 'AF', '374': 'AM',
  '994': 'AZ', '995': 'GE', '90': 'TR', '972': 'IL', '966': 'SA', '971': 'AE',
  '974': 'QA', '965': 'KW', '973': 'BH', '968': 'OM', '962': 'JO', '961': 'LB',
  '963': 'SY', '964': 'IQ', '967': 'YE', '970': 'PS', '98': 'IR',
  // Oceania
  '61': 'AU', '64': 'NZ', '679': 'FJ', '675': 'PG', '687': 'NC', '689': 'PF',
  '685': 'WS', '671': 'GU', '676': 'TO', '678': 'VU', '677': 'SB', '691': 'FM',
  '686': 'KI', '692': 'MH', '680': 'PW', '674': 'NR', '688': 'TV',
  // South America
  '55': 'BR', '54': 'AR', '56': 'CL', '57': 'CO', '51': 'PE', '58': 'VE',
  '593': 'EC', '591': 'BO', '595': 'PY', '598': 'UY', '592': 'GY', '597': 'SR',
  '594': 'GF', '500': 'FK',
  // Central America & Caribbean
  '502': 'GT', '504': 'HN', '503': 'SV', '505': 'NI', '506': 'CR', '507': 'PA',
  '501': 'BZ', '53': 'CU', '876': 'JM', '509': 'HT', '1809': 'DO', '1868': 'TT',
  '1242': 'BS', '1246': 'BB', '1758': 'LC', '1473': 'GD', '1784': 'VC', '1268': 'AG',
  '1767': 'DM', '1869': 'KN', '1787': 'PR', '1340': 'VI', '1649': 'TC', '1345': 'KY',
  '1441': 'BM', '297': 'AW', '599': 'CW', '1721': 'SX',
  // Africa
  '27': 'ZA', '20': 'EG', '234': 'NG', '254': 'KE', '251': 'ET', '233': 'GH',
  '255': 'TZ', '256': 'UG', '213': 'DZ', '212': 'MA', '216': 'TN', '218': 'LY',
  '249': 'SD', '211': 'SS', '252': 'SO', '253': 'DJ', '291': 'ER', '244': 'AO',
  '258': 'MZ', '260': 'ZM', '263': 'ZW', '267': 'BW', '264': 'NA', '265': 'MW',
  '261': 'MG', '230': 'MU', '248': 'SC', '262': 'RE', '269': 'KM',
  '221': 'SN', '223': 'ML', '222': 'MR', '227': 'NE', '235': 'TD', '237': 'CM',
  '236': 'CF', '242': 'CG', '243': 'CD', '241': 'GA', '240': 'GQ', '239': 'ST',
  '229': 'BJ', '228': 'TG', '225': 'CI', '226': 'BF', '224': 'GN', '245': 'GW',
  '231': 'LR', '232': 'SL', '220': 'GM', '238': 'CV', '266': 'LS', '268': 'SZ',
  '250': 'RW', '257': 'BI',
};

function getCountryFromCallingCode(callingCode: string): CountryCode {
  // Try exact match first
  if (CALLING_CODE_TO_COUNTRY[callingCode]) {
    return CALLING_CODE_TO_COUNTRY[callingCode];
  }

  // Try progressively shorter prefixes (for codes like 1809, 1868, etc.)
  // This handles cases where user is typing a longer code
  for (let len = callingCode.length; len > 0; len--) {
    const prefix = callingCode.slice(0, len);
    if (CALLING_CODE_TO_COUNTRY[prefix]) {
      return CALLING_CODE_TO_COUNTRY[prefix];
    }
  }

  return 'US'; // Default fallback
}

function getCallingCodeFromCountry(country: CountryCode): string {
  try {
    return getCountryCallingCode(country);
  } catch {
    return '1';
  }
}

export function PhoneInput({
  value = '',
  onChange,
  onBlur,
  placeholder,
  error,
  className = '',
  disabled = false,
}: PhoneInputProps) {
  const [detectedCountry, setDetectedCountry] = useState<CountryCode>('US');
  const [displayValue, setDisplayValue] = useState('');
  const [currentFlag, setCurrentFlag] = useState('🇺🇸');
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-detect country on mount
  useEffect(() => {
    let mounted = true;

    async function detectCountry() {
      try {
        const country = await detectUserCountry();
        if (mounted) {
          setDetectedCountry(country as CountryCode);
          const callingCode = getCallingCodeFromCountry(country as CountryCode);
          setCurrentFlag(COUNTRY_FLAGS[country] || '🇺🇸');

          // Initialize with +{code} if no value
          if (!value) {
            const initial = `+${callingCode}`;
            setDisplayValue(initial);
            if (onChange) {
              onChange(initial);
            }
          }
        }
      } catch (error) {
        console.error('[PhoneInput] Detection error:', error);
        if (mounted) {
          setDetectedCountry('US');
          setCurrentFlag('🇺🇸');
          if (!value) {
            setDisplayValue('+1');
            if (onChange) {
              onChange('+1');
            }
          }
        }
      }
    }

    detectCountry();

    return () => {
      mounted = false;
    };
  }, []);

  // Parse incoming value from parent and format it
  useEffect(() => {
    if (value) {
      // Extract digits
      const digitsOnly = value.replace(/[^\d]/g, '');

      if (!digitsOnly) {
        setDisplayValue('+');
        return;
      }

      // Detect country and update flag
      let country: CountryCode = 'US';
      try {
        const phoneNumber = parsePhoneNumber(value);
        if (phoneNumber && phoneNumber.country) {
          country = phoneNumber.country;
          setCurrentFlag(COUNTRY_FLAGS[phoneNumber.country] || '🇺🇸');
        } else {
          // Try to detect from calling code
          const match = value.match(/^\+(\d{1,4})/);
          if (match) {
            country = getCountryFromCallingCode(match[1]);
            setCurrentFlag(COUNTRY_FLAGS[country] || '🇺🇸');
          }
        }
      } catch {
        // Keep current flag
      }

      // Format based on country
      let formatted = value;
      if (digitsOnly[0] === '1' && (country === 'US' || country === 'CA')) {
        // US/CA formatting
        if (digitsOnly.length === 1) {
          formatted = `+1`;
        } else if (digitsOnly.length <= 4) {
          formatted = `+1 ${digitsOnly.slice(1)}`;
        } else if (digitsOnly.length <= 7) {
          formatted = `+1 ${digitsOnly.slice(1, 4)}-${digitsOnly.slice(4)}`;
        } else {
          formatted = `+1 ${digitsOnly.slice(1, 4)}-${digitsOnly.slice(4, 7)}-${digitsOnly.slice(7, 11)}`;
        }
      } else {
        try {
          const formatter = new AsYouType(country);
          formatted = formatter.input(`+${digitsOnly}`);
        } catch {
          formatted = value;
        }
      }

      setDisplayValue(formatted);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    // Extract just the digits (removing +, spaces, dashes, etc.)
    const digitsOnly = input.replace(/[^\d]/g, '');

    console.log('[PhoneInput] Input:', input, 'Digits:', digitsOnly);

    // Always ensure it starts with +
    if (!digitsOnly) {
      setDisplayValue('+');
      if (onChange) {
        onChange('+');
      }
      return;
    }

    // Rebuild with just digits
    const rawPhone = `+${digitsOnly}`;

    // Auto-detect country from calling code
    const match = rawPhone.match(/^\+(\d{1,4})/);
    let country: CountryCode = 'US';
    if (match) {
      const callingCode = match[1];
      country = getCountryFromCallingCode(callingCode);
      setCurrentFlag(COUNTRY_FLAGS[country] || '🇺🇸');
    }

    console.log('[PhoneInput] Detected country:', country, 'Raw phone:', rawPhone);

    // Format the phone number for display
    let formatted = rawPhone;

    // Only apply US/CA formatting if we're SURE it's a +1 number
    // (first digit is 1, which means it's definitely US/CA)
    if (digitsOnly[0] === '1' && (country === 'US' || country === 'CA')) {
      // US/CA formatting: +1 216-644-7650
      if (digitsOnly.length === 1) {
        formatted = `+1`;
      } else if (digitsOnly.length <= 4) {
        // +1 216
        formatted = `+1 ${digitsOnly.slice(1)}`;
      } else if (digitsOnly.length <= 7) {
        // +1 216-644
        formatted = `+1 ${digitsOnly.slice(1, 4)}-${digitsOnly.slice(4)}`;
      } else {
        // +1 216-644-7650
        formatted = `+1 ${digitsOnly.slice(1, 4)}-${digitsOnly.slice(4, 7)}-${digitsOnly.slice(7, 11)}`;
      }
    } else {
      // Use AsYouType for all other countries (including partial typing)
      try {
        const formatter = new AsYouType(country);
        formatted = formatter.input(rawPhone);
      } catch (error) {
        console.error('Phone formatting error:', error);
        formatted = rawPhone;
      }
    }

    console.log('[PhoneInput] Formatted:', formatted);

    setDisplayValue(formatted);

    // Emit raw E.164 format to parent (no formatting)
    if (onChange) {
      onChange(rawPhone);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Prevent deleting the + sign
    if (e.key === 'Backspace') {
      const input = e.currentTarget;
      if (input.selectionStart === 1 && input.selectionEnd === 1) {
        e.preventDefault();
      }
    }
  };

  const handleBlur = () => {
    // Ensure we always have at least +
    if (!displayValue || displayValue === '+') {
      const callingCode = getCallingCodeFromCountry(detectedCountry);
      const defaultValue = `+${callingCode}`;
      setDisplayValue(defaultValue);
      if (onChange) {
        onChange(defaultValue);
      }
    }

    if (onBlur) {
      onBlur();
    }
  };

  return (
    <div className="relative">
      <div className="relative flex items-center">
        {/* Flag emoji - positioned inside input */}
        <span
          className="absolute left-3 text-xl pointer-events-none z-10"
          style={{ fontSize: '20px' }}
        >
          {currentFlag}
        </span>

        {/* Input field with left padding for flag */}
        <input
          ref={inputRef}
          type="tel"
          value={displayValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          placeholder={placeholder || '+1 (555) 123-4567'}
          disabled={disabled}
          className={`
            w-full pl-12 pr-4 py-3 rounded-lg border
            ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-emerald-500'}
            focus:outline-none focus:ring-2 focus:border-transparent
            disabled:bg-gray-50 disabled:cursor-not-allowed
            transition-all duration-200
            ${className}
          `}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? 'phone-error' : undefined}
        />
      </div>

      {error && (
        <p id="phone-error" className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default PhoneInput;
