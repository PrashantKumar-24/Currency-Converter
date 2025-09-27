// Currency → Country code mapping (for flagsapi.com)
const countryList = {
    "USD": "US", // US Dollar
    "INR": "IN", // Indian Rupee
    "EUR": "EU", // Euro
    "GBP": "GB", // British Pound
    "JPY": "JP", // Japanese Yen
    "AUD": "AU", // Australian Dollar
    "CAD": "CA", // Canadian Dollar
    "CNY": "CN", // Chinese Yuan
    "BRL": "BR", // Brazilian Real
    "ZAR": "ZA", // South African Rand
    "CHF": "CH", // Swiss Franc
    "RUB": "RU", // Russian Ruble
    "NZD": "NZ", // New Zealand Dollar
    "SGD": "SG", // Singapore Dollar
    "HKD": "HK", // Hong Kong Dollar
    "KRW": "KR", // South Korean Won
    "MXN": "MX", // Mexican Peso
    "SEK": "SE", // Swedish Krona
    "NOK": "NO", // Norwegian Krone
    "DKK": "DK", // Danish Krone
    "TRY": "TR", // Turkish Lira
    "AED": "AE", // UAE Dirham
    "SAR": "SA", // Saudi Riyal
    "EGP": "EG", // Egyptian Pound
    "PKR": "PK", // Pakistani Rupee
    "BDT": "BD", // Bangladeshi Taka
    "LKR": "LK", // Sri Lankan Rupee
    "NGN": "NG", // Nigerian Naira
    "KES": "KE", // Kenyan Shilling
    "GHS": "GH", // Ghanaian Cedi
    "MAD": "MA", // Moroccan Dirham
    "TND": "TN", // Tunisian Dinar
    "PLN": "PL", // Polish Zloty
    "CZK": "CZ", // Czech Koruna
    "HUF": "HU", // Hungarian Forint
    "ILS": "IL", // Israeli Shekel
    "THB": "TH", // Thai Baht
    "VND": "VN", // Vietnamese Dong
    "MYR": "MY", // Malaysian Ringgit
    "IDR": "ID", // Indonesian Rupiah
    "PHP": "PH", // Philippine Peso
    "KWD": "KW", // Kuwaiti Dinar
    "QAR": "QA", // Qatari Riyal
    "OMR": "OM", // Omani Rial
    "BHD": "BH", // Bahraini Dinar
    "ARS": "AR", // Argentine Peso
    "CLP": "CL", // Chilean Peso
    "COP": "CO", // Colombian Peso
    "PEN": "PE", // Peruvian Sol
    "UYU": "UY", // Uruguayan Peso
    "BOB": "BO", // Bolivian Boliviano
    "PYG": "PY", // Paraguayan Guarani
    "DOP": "DO", // Dominican Peso
    "JMD": "JM", // Jamaican Dollar
    "TTD": "TT", // Trinidad & Tobago Dollar
    "XCD": "AG", // East Caribbean Dollar
    "FJD": "FJ", // Fijian Dollar
    "PGK": "PG", // Papua New Guinean Kina
    "WST": "WS", // Samoan Tala
    "TOP": "TO", // Tongan Paʻanga
    "XPF": "PF", // CFP Franc
    "MUR": "MU", // Mauritian Rupee
    "SCR": "SC", // Seychellois Rupee
    "BND": "BN", // Brunei Dollar
    "MVR": "MV", // Maldivian Rufiyaa
    "NPR": "NP", // Nepalese Rupee
    "MMK": "MM", // Burmese Kyat
    "KZT": "KZ", // Kazakhstani Tenge
    "UZS": "UZ", // Uzbekistani Som
    "TJS": "TJ", // Tajikistani Somoni
    "AZN": "AZ", // Azerbaijani Manat
    "GEL": "GE", // Georgian Lari
    "AMD": "AM", // Armenian Dram
    "BYN": "BY", // Belarusian Ruble
    "UAH": "UA", // Ukrainian Hryvnia
    "BGN": "BG", // Bulgarian Lev
    "RON": "RO", // Romanian Leu
    "HRK": "HR", // Croatian Kuna
    "ISK": "IS", // Icelandic Krona
    "MKD": "MK", // Macedonian Denar
    "ALL": "AL", // Albanian Lek
    "RSD": "RS", // Serbian Dinar
    "BAM": "BA", // Bosnian Convertible Mark
    "MDL": "MD", // Moldovan Leu
    "MNT": "MN", // Mongolian Tugrik
    "LAK": "LA", // Lao Kip
    "KHR": "KH", // Cambodian Riel
    "AFN": "AF", // Afghan Afghani
    "IRR": "IR", // Iranian Rial
    "IQD": "IQ", // Iraqi Dinar
    "SYP": "SY", // Syrian Pound
    "YER": "YE", // Yemeni Rial
    "SDG": "SD", // Sudanese Pound
    "ETB": "ET", // Ethiopian Birr
    "TZS": "TZ", // Tanzanian Shilling
    "UGX": "UG", // Ugandan Shilling
    "XAF": "CM", // Central African CFA franc
    "XOF": "SN", // West African CFA franc
    "CDF": "CD", // Congolese Franc
    "MWK": "MW", // Malawian Kwacha
    "ZMW": "ZM", // Zambian Kwacha
    "BWP": "BW", // Botswana Pula
    "LSL": "LS", // Lesotho Loti
    "SZL": "SZ", // Eswatini Lilangeni
    "MZN": "MZ", // Mozambican Metical
};