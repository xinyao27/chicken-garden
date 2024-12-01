import StatsCard from '@/components/custom/stats-card'

const stats = [
  {
    key: 'US',
    total: 2798,
    devices: 1076,
  },
  {
    key: 'IN',
    total: 1857,
    devices: 708,
  },
  {
    key: 'GB',
    total: 760,
    devices: 334,
  },
  {
    key: 'JP',
    total: 704,
    devices: 331,
  },
  {
    key: 'DE',
    total: 612,
    devices: 270,
  },
  {
    key: 'FR',
    total: 668,
    devices: 226,
  },
  {
    key: 'KR',
    total: 817,
    devices: 215,
  },
  {
    key: 'BR',
    total: 551,
    devices: 192,
  },
  {
    key: 'ES',
    total: 537,
    devices: 174,
  },
  {
    key: 'CA',
    total: 439,
    devices: 172,
  },
  {
    key: 'ID',
    total: 381,
    devices: 151,
  },
  {
    key: 'PL',
    total: 454,
    devices: 145,
  },
  {
    key: 'TR',
    total: 453,
    devices: 142,
  },
  {
    key: 'NL',
    total: 306,
    devices: 137,
  },
  {
    key: 'AR',
    total: 236,
    devices: 113,
  },
  {
    key: 'HK',
    total: 351,
    devices: 103,
  },
  {
    key: 'CN',
    total: 438,
    devices: 97,
  },
  {
    key: 'AU',
    total: 244,
    devices: 92,
  },
  {
    key: 'CO',
    total: 202,
    devices: 83,
  },
  {
    key: 'IT',
    total: 209,
    devices: 80,
  },
  {
    key: 'VN',
    total: 287,
    devices: 78,
  },
  {
    key: 'RU',
    total: 297,
    devices: 75,
  },
  {
    key: 'EG',
    total: 206,
    devices: 72,
  },
  {
    key: 'MX',
    total: 204,
    devices: 72,
  },
  {
    key: 'SE',
    total: 208,
    devices: 70,
  },
  {
    key: 'SG',
    total: 205,
    devices: 61,
  },
  {
    key: 'PT',
    total: 140,
    devices: 60,
  },
  {
    key: 'CZ',
    total: 173,
    devices: 58,
  },
  {
    key: 'PH',
    total: 116,
    devices: 57,
  },
  {
    key: 'UA',
    total: 164,
    devices: 55,
  },
  {
    key: 'FI',
    total: 118,
    devices: 51,
  },
  {
    key: 'CH',
    total: 138,
    devices: 48,
  },
  {
    key: 'IL',
    total: 133,
    devices: 47,
  },
  {
    key: 'TH',
    total: 141,
    devices: 47,
  },
  {
    key: 'TW',
    total: 113,
    devices: 46,
  },
  {
    key: 'NG',
    total: 95,
    devices: 44,
  },
  {
    key: 'NO',
    total: 104,
    devices: 36,
  },
  {
    key: 'RO',
    total: 104,
    devices: 36,
  },
  {
    key: 'BE',
    total: 110,
    devices: 35,
  },
  {
    key: 'CL',
    total: 60,
    devices: 35,
  },
  {
    key: 'MA',
    total: 89,
    devices: 32,
  },
  {
    key: 'NZ',
    total: 62,
    devices: 31,
  },
  {
    key: 'PK',
    total: 81,
    devices: 30,
  },
  {
    key: 'DK',
    total: 71,
    devices: 29,
  },
  {
    key: 'MY',
    total: 41,
    devices: 28,
  },
  {
    key: 'BD',
    total: 65,
    devices: 27,
  },
  {
    key: 'AT',
    total: 90,
    devices: 26,
  },
  {
    key: 'IR',
    total: 70,
    devices: 26,
  },
  {
    key: 'PE',
    total: 77,
    devices: 26,
  },
  {
    key: 'IE',
    total: 41,
    devices: 24,
  },
  {
    key: 'AE',
    total: 56,
    devices: 23,
  },
  {
    key: 'HU',
    total: 42,
    devices: 23,
  },
  {
    key: 'SA',
    total: 59,
    devices: 23,
  },
  {
    key: 'BG',
    total: 69,
    devices: 19,
  },
  {
    key: 'GR',
    total: 47,
    devices: 19,
  },
  {
    key: 'LK',
    total: 29,
    devices: 19,
  },
  {
    key: 'NP',
    total: 35,
    devices: 19,
  },
  {
    key: 'RS',
    total: 51,
    devices: 19,
  },
  {
    key: 'VE',
    total: 96,
    devices: 19,
  },
  {
    key: 'HR',
    total: 28,
    devices: 18,
  },
  {
    key: 'KE',
    total: 28,
    devices: 18,
  },
  {
    key: 'LT',
    total: 23,
    devices: 18,
  },
  {
    key: 'GE',
    total: 24,
    devices: 14,
  },
  {
    key: 'MK',
    total: 59,
    devices: 14,
  },
  {
    key: 'SK',
    total: 50,
    devices: 14,
  },
  {
    key: 'EE',
    total: 22,
    devices: 13,
  },
  {
    key: 'AM',
    total: 34,
    devices: 12,
  },
  {
    key: 'DZ',
    total: 25,
    devices: 11,
  },
  {
    key: 'UY',
    total: 24,
    devices: 11,
  },
  {
    key: 'LV',
    total: 26,
    devices: 10,
  },
  {
    key: 'TN',
    total: 20,
    devices: 10,
  },
  {
    key: 'CY',
    total: 18,
    devices: 9,
  },
  {
    key: 'YE',
    total: 18,
    devices: 9,
  },
  {
    key: 'ZA',
    total: 24,
    devices: 9,
  },
  {
    key: 'BA',
    total: 21,
    devices: 8,
  },
  {
    key: 'GH',
    total: 12,
    devices: 8,
  },
  {
    key: 'IQ',
    total: 37,
    devices: 8,
  },
  {
    key: 'AZ',
    total: 11,
    devices: 7,
  },
  {
    key: 'CR',
    total: 10,
    devices: 7,
  },
  {
    key: 'DO',
    total: 15,
    devices: 7,
  },
  {
    key: 'EC',
    total: 20,
    devices: 7,
  },
  {
    key: 'KZ',
    total: 17,
    devices: 7,
  },
  {
    key: 'HN',
    total: 10,
    devices: 6,
  },
  {
    key: 'PR',
    total: 7,
    devices: 6,
  },
  {
    key: 'PS',
    total: 11,
    devices: 6,
  },
  {
    key: 'SI',
    total: 10,
    devices: 6,
  },
  {
    key: 'UZ',
    total: 20,
    devices: 6,
  },
  {
    key: 'MD',
    total: 14,
    devices: 5,
  },
  {
    key: 'PA',
    total: 18,
    devices: 5,
  },
  {
    key: 'ET',
    total: 11,
    devices: 4,
  },
  {
    key: 'JO',
    total: 13,
    devices: 4,
  },
  {
    key: 'KH',
    total: 24,
    devices: 4,
  },
  {
    key: 'LB',
    total: 5,
    devices: 4,
  },
  {
    key: 'LU',
    total: 11,
    devices: 4,
  },
  {
    key: 'MM',
    total: 36,
    devices: 4,
  },
  {
    key: 'AL',
    total: 4,
    devices: 3,
  },
  {
    key: 'BH',
    total: 4,
    devices: 3,
  },
  {
    key: 'BY',
    total: 9,
    devices: 3,
  },
  {
    key: 'CU',
    total: 4,
    devices: 3,
  },
  {
    key: 'GT',
    total: 3,
    devices: 3,
  },
  {
    key: 'IS',
    total: 3,
    devices: 3,
  },
  {
    key: 'ME',
    total: 16,
    devices: 3,
  },
  {
    key: 'MN',
    total: 7,
    devices: 3,
  },
  {
    key: 'MT',
    total: 3,
    devices: 3,
  },
  {
    key: 'NI',
    total: 13,
    devices: 3,
  },
  {
    key: 'RW',
    total: 7,
    devices: 3,
  },
  {
    key: 'SO',
    total: 3,
    devices: 3,
  },
  {
    key: 'BI',
    total: 4,
    devices: 2,
  },
  {
    key: 'BJ',
    total: 2,
    devices: 2,
  },
  {
    key: 'IM',
    total: 15,
    devices: 2,
  },
  {
    key: 'MO',
    total: 3,
    devices: 2,
  },
  {
    key: 'MV',
    total: 10,
    devices: 2,
  },
  {
    key: 'MZ',
    total: 3,
    devices: 2,
  },
  {
    key: 'SV',
    total: 3,
    devices: 2,
  },
  {
    key: 'XK',
    total: 6,
    devices: 2,
  },
  {
    key: 'AO',
    total: 4,
    devices: 1,
  },
  {
    key: 'BB',
    total: 9,
    devices: 1,
  },
  {
    key: 'BF',
    total: 1,
    devices: 1,
  },
  {
    key: 'BO',
    total: 1,
    devices: 1,
  },
  {
    key: 'CM',
    total: 1,
    devices: 1,
  },
  {
    key: 'GA',
    total: 1,
    devices: 1,
  },
  {
    key: 'KW',
    total: 2,
    devices: 1,
  },
  {
    key: 'KY',
    total: 1,
    devices: 1,
  },
  {
    key: 'LI',
    total: 3,
    devices: 1,
  },
  {
    key: 'LY',
    total: 1,
    devices: 1,
  },
  {
    key: 'MG',
    total: 2,
    devices: 1,
  },
  {
    key: 'OM',
    total: 7,
    devices: 1,
  },
  {
    key: 'QA',
    total: 13,
    devices: 1,
  },
  {
    key: 'RE',
    total: 1,
    devices: 1,
  },
  {
    key: 'TG',
    total: 12,
    devices: 1,
  },
  {
    key: 'TT',
    total: 1,
    devices: 1,
  },
  {
    key: 'UG',
    total: 1,
    devices: 1,
  },
  {
    key: 'ZM',
    total: 1,
    devices: 1,
  },
  {
    key: 'ZW',
    total: 2,
    devices: 1,
  },
]

export default function ContentCountries() {
  return <StatsCard data={stats} labels={['Page Views', 'Visitors']} title="Countries" />
}
