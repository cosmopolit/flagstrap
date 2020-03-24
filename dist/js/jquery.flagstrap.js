/*
 *  FlagStrap - v1.0
 *  A lightwieght jQuery plugin for creating Bootstrap 3 compatible country select boxes with flags.
 *  http://www.blazeworx.com/flagstrap
 *
 *  Made by Alex Carter
 *  Under MIT License
 */
($ => {
    var defaults = {
        buttonSize: 'btn-md',
        buttonType: 'btn-default',
        labelMargin: '10px',
        scrollable: true,
        scrollableHeight: '250px',
        placeholder: {
            value: '',
            text: 'Please select country'
        },
        cssPath: ''
    };
    var countries = {
        'AF': 'Afghanistan',
        'AL': 'Albania',
        'DZ': 'Algeria',
        'AS': 'American Samoa',
        'AD': 'Andorra',
        'AO': 'Angola',
        'AI': 'Anguilla',
        'AG': 'Antigua and Barbuda',
        'AR': 'Argentina',
        'AM': 'Armenia',
        'AW': 'Aruba',
        'AU': 'Australia',
        'AT': 'Austria',
        'AZ': 'Azerbaijan',
        'BS': 'Bahamas',
        'BH': 'Bahrain',
        'BD': 'Bangladesh',
        'BB': 'Barbados',
        'BY': 'Belarus',
        'BE': 'Belgium',
        'BZ': 'Belize',
        'BJ': 'Benin',
        'BM': 'Bermuda',
        'BT': 'Bhutan',
        'BO': 'Bolivia, Plurinational State of',
        'BA': 'Bosnia and Herzegovina',
        'BW': 'Botswana',
        'BV': 'Bouvet Island',
        'BR': 'Brazil',
        'IO': 'British Indian Ocean Territory',
        'BN': 'Brunei Darussalam',
        'BG': 'Bulgaria',
        'BF': 'Burkina Faso',
        'BI': 'Burundi',
        'KH': 'Cambodia',
        'CM': 'Cameroon',
        'CA': 'Canada',
        'CV': 'Cape Verde',
        'KY': 'Cayman Islands',
        'CF': 'Central African Republic',
        'TD': 'Chad',
        'CL': 'Chile',
        'CN': 'China',
        'CO': 'Colombia',
        'KM': 'Comoros',
        'CG': 'Congo',
        'CD': 'Congo, the Democratic Republic of the',
        'CK': 'Cook Islands',
        'CR': 'Costa Rica',
        'CI': 'C' + '&ocirc;' + 'te d\'Ivoire',
        'HR': 'Croatia',
        'CU': 'Cuba',
        'CW': 'Cura' + '&ccedil;' + 'ao',
        'CY': 'Cyprus',
        'CZ': 'Czech Republic',
        'DK': 'Denmark',
        'DJ': 'Djibouti',
        'DM': 'Dominica',
        'DO': 'Dominican Republic',
        'EC': 'Ecuador',
        'EG': 'Egypt',
        'SV': 'El Salvador',
        'GQ': 'Equatorial Guinea',
        'ER': 'Eritrea',
        'EE': 'Estonia',
        'ET': 'Ethiopia',
        'FK': 'Falkland Islands (Malvinas)',
        'FO': 'Faroe Islands',
        'FJ': 'Fiji',
        'FI': 'Finland',
        'FR': 'France',
        'GF': 'French Guiana',
        'PF': 'French Polynesia',
        'TF': 'French Southern Territories',
        'GA': 'Gabon',
        'GM': 'Gambia',
        'GE': 'Georgia',
        'DE': 'Germany',
        'GH': 'Ghana',
        'GI': 'Gibraltar',
        'GR': 'Greece',
        'GL': 'Greenland',
        'GD': 'Grenada',
        'GP': 'Guadeloupe',
        'GU': 'Guam',
        'GT': 'Guatemala',
        'GG': 'Guernsey',
        'GN': 'Guinea',
        'GW': 'Guinea-Bissau',
        'GY': 'Guyana',
        'HT': 'Haiti',
        'HM': 'Heard Island and McDonald Islands',
        'VA': 'Holy See (Vatican City State)',
        'HN': 'Honduras',
        'HK': 'Hong Kong',
        'HU': 'Hungary',
        'IS': 'Iceland',
        'IN': 'India',
        'ID': 'Indonesia',
        'IR': 'Iran, Islamic Republic of',
        'IQ': 'Iraq',
        'IE': 'Ireland',
        'IM': 'Isle of Man',
        'IL': 'Israel',
        'IT': 'Italy',
        'JM': 'Jamaica',
        'JP': 'Japan',
        'JE': 'Jersey',
        'JO': 'Jordan',
        'KZ': 'Kazakhstan',
        'KE': 'Kenya',
        'KI': 'Kiribati',
        'KP': 'Korea, Democratic People\'s Republic of',
        'KR': 'Korea, Republic of',
        'KW': 'Kuwait',
        'KG': 'Kyrgyzstan',
        'LA': 'Lao People\'s Democratic Republic',
        'LV': 'Latvia',
        'LB': 'Lebanon',
        'LS': 'Lesotho',
        'LR': 'Liberia',
        'LY': 'Libya',
        'LI': 'Liechtenstein',
        'LT': 'Lithuania',
        'LU': 'Luxembourg',
        'MO': 'Macao',
        'MK': 'Macedonia, the former Yugoslav Republic of',
        'MG': 'Madagascar',
        'MW': 'Malawi',
        'MY': 'Malaysia',
        'MV': 'Maldives',
        'ML': 'Mali',
        'MT': 'Malta',
        'MH': 'Marshall Islands',
        'MQ': 'Martinique',
        'MR': 'Mauritania',
        'MU': 'Mauritius',
        'YT': 'Mayotte',
        'MX': 'Mexico',
        'FM': 'Micronesia, Federated States of',
        'MD': 'Moldova, Republic of',
        'MC': 'Monaco',
        'MN': 'Mongolia',
        'ME': 'Montenegro',
        'MS': 'Montserrat',
        'MA': 'Morocco',
        'MZ': 'Mozambique',
        'MM': 'Myanmar',
        'NA': 'Namibia',
        'NR': 'Nauru',
        'NP': 'Nepal',
        'NL': 'Netherlands',
        'NC': 'New Caledonia',
        'NZ': 'New Zealand',
        'NI': 'Nicaragua',
        'NE': 'Niger',
        'NG': 'Nigeria',
        'NU': 'Niue',
        'NF': 'Norfolk Island',
        'MP': 'Northern Mariana Islands',
        'NO': 'Norway',
        'OM': 'Oman',
        'PK': 'Pakistan',
        'PW': 'Palau',
        'PS': 'Palestinian Territory, Occupied',
        'PA': 'Panama',
        'PG': 'Papua New Guinea',
        'PY': 'Paraguay',
        'PE': 'Peru',
        'PH': 'Philippines',
        'PN': 'Pitcairn',
        'PL': 'Poland',
        'PT': 'Portugal',
        'PR': 'Puerto Rico',
        'QA': 'Qatar',
        'RE': 'R' + '&eacute;' + 'union',
        'RO': 'Romania',
        'RU': 'Russian Federation',
        'RW': 'Rwanda',
        'SH': 'Saint Helena, Ascension and Tristan da Cunha',
        'KN': 'Saint Kitts and Nevis',
        'LC': 'Saint Lucia',
        'MF': 'Saint Martin (French part)',
        'PM': 'Saint Pierre and Miquelon',
        'VC': 'Saint Vincent and the Grenadines',
        'WS': 'Samoa',
        'SM': 'San Marino',
        'ST': 'Sao Tome and Principe',
        'SA': 'Saudi Arabia',
        'SN': 'Senegal',
        'RS': 'Serbia',
        'SC': 'Seychelles',
        'SL': 'Sierra Leone',
        'SG': 'Singapore',
        'SX': 'Sint Maarten (Dutch part)',
        'SK': 'Slovakia',
        'SI': 'Slovenia',
        'SB': 'Solomon Islands',
        'SO': 'Somalia',
        'ZA': 'South Africa',
        'GS': 'South Georgia and the South Sandwich Islands',
        'SS': 'South Sudan',
        'ES': 'Spain',
        'LK': 'Sri Lanka',
        'SD': 'Sudan',
        'SR': 'Suriname',
        'SZ': 'Swaziland',
        'SE': 'Sweden',
        'CH': 'Switzerland',
        'SY': 'Syrian Arab Republic',
        'TW': 'Taiwan, Province of China',
        'TJ': 'Tajikistan',
        'TZ': 'Tanzania, United Republic of',
        'TH': 'Thailand',
        'TL': 'Timor-Leste',
        'TG': 'Togo',
        'TK': 'Tokelau',
        'TO': 'Tonga',
        'TT': 'Trinidad and Tobago',
        'TN': 'Tunisia',
        'TR': 'Turkey',
        'TM': 'Turkmenistan',
        'TC': 'Turks and Caicos Islands',
        'TV': 'Tuvalu',
        'UG': 'Uganda',
        'UA': 'Ukraine',
        'AE': 'United Arab Emirates',
        'GB': 'United Kingdom',
        'US': 'United States',
        'UM': 'United States Minor Outlying Islands',
        'UY': 'Uruguay',
        'UZ': 'Uzbekistan',
        'VU': 'Vanuatu',
        'VE': 'Venezuela, Bolivarian Republic of',
        'VN': 'Viet Nam',
        'VG': 'Virgin Islands, British',
        'VI': 'Virgin Islands, U.S.',
        'WF': 'Wallis and Futuna',
        'EH': 'Western Sahara',
        'YE': 'Yemen',
        'ZM': 'Zambia',
        'ZW': 'Zimbabwe'
    };
    jQuery.flagStrap = function (element, options, i) {
        var plugin = this;
        var uniqueId = generateId(8);
        plugin.countries = {};
        plugin.selected = {
            value: null,
            text: null
        };
        plugin.settings = { inputName: `country-${ uniqueId }` };
        var $container = jQuery(element);
        var htmlSelectId = `flagstrap-${ uniqueId }`;
        var htmlSelect = `#${ htmlSelectId }`;
        var loadCss = cssPath => {
            if (!cssPath) {
                console.error('CSS Path missing. Please initialize the class using jQuery.flagstrap.set("/path/to/css/flagstrap.min.css")');
                return false;
            }
            var links = document.getElementsByTagName('link');
            var needCSS = true;
            for (var i = 0; i < links.length; i++) {
                if (links[i].href.includes('flagstrap.min.css'))
                    needCSS = false;
            }
            if (needCSS) {
                var ls = document.createElement('link');
                ls.rel = 'stylesheet';
                ls.href = cssPath;
                document.getElementsByTagName('head')[0].appendChild(ls);
            }
            return true;
        };
        plugin.init = () => {
            // Merge in global settings then merge in individual settings via data attributes
            plugin.countries = countries;
            // Initialize Settings, priority: defaults, init options, data attributes
            plugin.countries = countries;
            plugin.settings = jQuery.extend({}, defaults, options, $container.data());
            if (plugins.settings.cssPath) {
                if (!loadCss(plugin.settings.cssPath)) {
                    return false;
                }
            }
            if (undefined !== plugin.settings.countries) {
                plugin.countries = plugin.settings.countries;
            }
            if (undefined !== plugin.settings.inputId) {
                htmlSelectId = plugin.settings.inputId;
                htmlSelect = `#${ htmlSelectId }`;
            }
            // Build HTML Select, Construct the drop down button, Assemble the drop down list items element and insert
            $container.addClass('flagstrap').append(buildHtmlSelect).append(buildDropDownButton).append(buildDropDownButtonItemList);
            // Check to see if the onSelect callback method is assigned / callable, bind the change event for broadcast
            if (plugin.settings.onSelect !== undefined && plugin.settings.onSelect instanceof Function) {
                jQuery(htmlSelect).change(function (event) {
                    var element = this;
                    options.onSelect(jQuery(element).val(), element);
                });
            }
            // Hide the actual HTML select
            jQuery(htmlSelect).hide();
        };
        var buildHtmlSelect = () => {
            var htmlSelectElement = jQuery('<select/>').attr('id', htmlSelectId).attr('name', plugin.settings.inputName);
            jQuery.each(plugin.countries, (code, country) => {
                var optionAttributes = { value: code };
                if (plugin.settings.selectedCountry !== undefined) {
                    if (plugin.settings.selectedCountry === code) {
                        optionAttributes = {
                            value: code,
                            selected: 'selected'
                        };
                        plugin.selected = {
                            value: code,
                            text: country
                        };
                    }
                }
                htmlSelectElement.append(jQuery('<option>', optionAttributes).text(country));
            });
            if (plugin.settings.placeholder !== false) {
                htmlSelectElement.prepend(jQuery('<option>', {
                    value: plugin.settings.placeholder.value,
                    text: plugin.settings.placeholder.text
                }));
            }
            return htmlSelectElement;
        };
        var buildDropDownButton = () => {
            var selectedText = jQuery(htmlSelect).find('option').first().text();
            var selectedValue = jQuery(htmlSelect).find('option').first().val();
            selectedText = plugin.selected.text || selectedText;
            selectedValue = plugin.selected.value || selectedValue;
            if (selectedValue !== plugin.settings.placeholder.value) {
                var $selectedLabel = jQuery('<i/>').addClass(`flagstrap-icon flagstrap-${ selectedValue.toLowerCase() }`).css('margin-right', plugin.settings.labelMargin);
            } else {
                var $selectedLabel = jQuery('<i/>').addClass('flagstrap-icon flagstrap-placeholder');
            }
            var buttonLabel = jQuery('<span/>').addClass(`flagstrap-selected-${ uniqueId }`).html($selectedLabel).append(selectedText);
            var button = jQuery('<button/>').attr('type', 'button').attr('data-toggle', 'dropdown').attr('id', `flagstrap-drop-down-${ uniqueId }`).addClass(`btn ${ plugin.settings.buttonType } ${ plugin.settings.buttonSize } dropdown-toggle`).html(buttonLabel);
            jQuery('<span/>').addClass('caret').css('margin-left', plugin.settings.labelMargin).insertAfter(buttonLabel);
            return button;
        };
        var buildDropDownButtonItemList = () => {
            var items = jQuery('<ul/>').attr('id', `flagstrap-drop-down-${ uniqueId }-list`).attr('aria-labelled-by', `flagstrap-drop-down-${ uniqueId }`).addClass('dropdown-menu');
            if (plugin.settings.scrollable) {
                items.css('height', 'auto').css('max-height', plugin.settings.scrollableHeight).css('overflow-x', 'hidden');
            }
            // Populate the bootstrap dropdown item list
            jQuery(htmlSelect).find('option').each(function () {
                // Get original select option values and labels
                var text = jQuery(this).text();
                var value = jQuery(this).val();
                // Build the flag icon
                if (value !== plugin.settings.placeholder.value) {
                    var flagIcon = jQuery('<i/>').addClass(`flagstrap-icon flagstrap-${ value.toLowerCase() }`).css('margin-right', plugin.settings.labelMargin);
                } else {
                    var flagIcon = null;
                }
                // Build a clickable drop down option item, insert the flag and label, attach click event
                var flagStrapItem = jQuery('<a/>').attr('data-val', jQuery(this).val()).html(flagIcon).append(text).on('click', function (e) {
                    jQuery(htmlSelect).find('option').removeAttr('selected');
                    jQuery(htmlSelect).find(`option[value="${ jQuery(this).data('val') }"]`).attr('selected', 'selected');
                    jQuery(htmlSelect).trigger('change');
                    jQuery(`.flagstrap-selected-${ uniqueId }`).html(jQuery(this).html());
                    e.preventDefault();
                });
                // Make it a list item
                var listItem = jQuery('<li/>').prepend(flagStrapItem);
                // Append it to the drop down item list
                items.append(listItem);
            });
            return items;
        };
        function generateId(length) {
            var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
            if (!length) {
                length = Math.floor(Math.random() * chars.length);
            }
            var str = '';
            for (var i = 0; i < length; i++) {
                str += chars[Math.floor(Math.random() * chars.length)];
            }
            return str;
        }
        plugin.init();
    };
    jQuery.flagStrap.set = cssPath => {
        defaults.cssPath = cssPath;
    };
    jQuery.fn.flagStrap = function (options) {
        return this.each(function (i) {
            if (jQuery(this).data('flagStrap') === undefined) {
                jQuery(this).data('flagStrap', new jQuery.flagStrap(this, options, i));
            }
        });
    };
});
