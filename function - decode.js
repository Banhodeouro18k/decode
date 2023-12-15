(function (_0x264a57, _0x1946ac) {
    const _0x5865f0 = _0x1883,
        _0xe1652e = _0x264a57();
    while (!![]) {
        try {
            const _0x39659a = parseInt(_0x5865f0(0x177)) / 0x1 + parseInt(_0x5865f0(0x193)) / 0x2 + -parseInt(_0x5865f0(0x1b8)) / 0x3 * (parseInt(_0x5865f0(0x1db)) / 0x4) + parseInt(_0x5865f0(0x1b0)) / 0x5 * (parseInt(_0x5865f0(0x21d)) / 0x6) + parseInt(_0x5865f0(0x17c)) / 0x7 * (parseInt(_0x5865f0(0x219)) / 0x8) + parseInt(_0x5865f0(0x21c)) / 0x9 + -parseInt(_0x5865f0(0x1cf)) / 0xa;
            if (_0x39659a === _0x1946ac) break;
            else _0xe1652e['push'](_0xe1652e['shift']());
        } catch (_0x103732) {
            _0xe1652e['push'](_0xe1652e['shift']());
        }
    }
}(_0x18be, 0x86490));
import _0x1fc560 from '../database/dbpromise.js';
import _0x27d4f6 from 'node-fetch';
import _0x2a27f7 from 'jsonwebtoken';
import _0x509b28 from 'fs';
import OpenAI from 'openai';
import _0x4f7f38 from 'path';
import _0x4bbb92 from 'nodemailer';
import _0x140b8e from 'moment';
import _0x1007c6 from 'officeparser';
import _0xa94ae5 from 'text-from-image';
import {
    convert
} from 'html-to-text';
import _0x190e5b from 'mysql';
import {
    encodingForModel
} from 'js-tiktoken';
const {
    sign
} = _0x2a27f7;
function returnTokenTxt2Img(_0x1804e9) {
    const _0x1a1adc = _0x1883;
    let _0x86b9af = 0x6;
    if (_0x1804e9 === _0x1a1adc(0x18e)) _0x86b9af = 0x6;
    else {
        if (_0x1804e9 === '512x786') _0x86b9af = 0x8;
        else _0x1804e9 === _0x1a1adc(0x1a4) ? _0x86b9af = 0xa : _0x86b9af = 0x6;
    }
    return _0x86b9af;
}
async function checkHamWizToken(_0x740726) {
    const _0x2c6cfa = _0x1883,
        _0x162fdf = _0x2c6cfa(0x199);
    try {
        const _0x2a1ab1 = await _0x27d4f6(_0x162fdf, {
            'method': _0x2c6cfa(0x1a8),
            'headers': {
                'Authorization': _0x2c6cfa(0x211) + _0x740726
            }
        });
        if (!_0x2a1ab1['ok']) throw new Error(_0x2c6cfa(0x17e) + _0x2a1ab1[_0x2c6cfa(0x189)]);
        const _0x19f65a = await _0x2a1ab1[_0x2c6cfa(0x19e)]();
        return {
            'success': !![],
            'data': _0x19f65a
        };
    } catch (_0x5c6efe) {
        return {
            'success': ![],
            'err': _0x5c6efe
        };
    }
}
function splitIntoChunksLicenseCode(_0x62136, _0x4a47fc, _0x3aa67c = 0x1f4) {
    const _0x16d71e = _0x1883,
        _0x382482 = encodingForModel(_0x4a47fc),
        _0x321073 = _0x382482[_0x16d71e(0x17b)](_0x62136),
        _0x369c56 = [];
    for (let _0x415645 = 0x0; _0x415645 < _0x321073[_0x16d71e(0x1bf)]; _0x415645 += _0x3aa67c) {
        const _0xc5f305 = _0x321073[_0x16d71e(0x191)](_0x415645, _0x415645 + _0x3aa67c),
            _0x4fbf49 = _0xc5f305[_0x16d71e(0x1f2)](_0x4b925a => _0x382482['decode']([_0x4b925a]));
        _0x369c56[_0x16d71e(0x1fd)](_0x4fbf49[_0x16d71e(0x1e0)](''));
    }
    return _0x369c56;
}
async function refindReply(_0x31f8cb, _0x25cecb, _0x27dbcf) {
    const _0x493619 = _0x1883,
        
        _0x2c68a4 = new OpenAI({
            'apiKey': _0x31f8cb
        }),
        _0x139dcd = [{
            'role': _0x493619(0x1ab),
            'content': _0x493619(0x1f7) + _0x25cecb
        }],
        _0x55f22f = await _0x2c68a4[_0x493619(0x1cc)]({
            'model': _0x27dbcf,
            'messages': _0x139dcd,
            'max_tokens': 0x1f4,
            'n': 0x1,
            'stop': null,
            'temperature': 0.5
        });
    return _0x55f22f?. [_0x493619(0x1c3)]?. [_0x493619(0x202)][0x0]?. [_0x493619(0x22b)]['content'];
}
async function callOpenAIApi(_0x3cfea4, _0x419017, _0x9b5973, _0x4f3c85, _0x1be621, _0x4f8cb2) {
    const _0xcbe021 = _0x1883,
        
        _0x3cb80a = new OpenAI({
            'apiKey': _0x419017
        }),
        _0x41c32a = [{
            'role': _0xcbe021(0x224),
            'content': _0xcbe021(0x18a) + _0x1be621 + '\"'
        }, {
            'role': 'user',
            'content': '' + _0x4f3c85
        }],
        _0xe55ddf = _0x9b5973[_0xcbe021(0x1d6)](_0x41c32a),
        _0x5d53e0 = await _0x3cb80a[_0xcbe021(0x1cc)]({
            'model': _0x4f8cb2,
            'messages': _0xe55ddf,
            'max_tokens': 0x1f4,
            'n': 0x1,
            'stop': null,
            'temperature': 0.5
        });
    return {
        'content': _0x5d53e0?. [_0xcbe021(0x1c3)]?. ['choices'][0x0]?. [_0xcbe021(0x22b)][_0xcbe021(0x1be)][_0xcbe021(0x196)](),
        'tokens': _0x5d53e0?. [_0xcbe021(0x1c3)]?. [_0xcbe021(0x1a5)]?. [_0xcbe021(0x1e4)]
    };
}
function openAitextWABot(_0x4da15b, _0x25b836, _0x8de1b, _0xf6dc6d, _0x4ad3c7) {
    return new Promise(async _0x370125 => {
        const _0x24a607 = _0x1883;
        try {
            const _0x3189e2 = {
                'role': _0x24a607(0x1ab),
                'content': _0x25b836
            };
            await pushObjectToArrayAndDeleteOld(_0x4da15b, _0x3189e2);
            const _0x21bf85 = await readJsonFile(_0x4da15b),
                _0x3364aa = splitIntoChunksLicenseCode(_0x8de1b, _0x4ad3c7),
                _0x17e00c = await Promise['all'](_0x3364aa[_0x24a607(0x1f2)](_0xf6bffe => callOpenAIApi(_0xf6bffe, _0xf6dc6d, _0x21bf85, _0x25b836, _0x8de1b, _0x4ad3c7))),
                _0x448353 = _0x17e00c[_0x24a607(0x1b6)](_0x5d9dc5 => _0x5d9dc5 && _0x5d9dc5[_0x24a607(0x1be)]),
                _0x196fa4 = _0x448353[_0x24a607(0x1f2)](_0x39b014 => _0x39b014[_0x24a607(0x1be)])[_0x24a607(0x1e0)]('\x0a'),
                _0x59d176 = _0x448353[_0x24a607(0x1c5)]((_0x3d3df0, _0x64cf01) => _0x3d3df0 + (_0x64cf01['tokens'] || 0x0), 0x0);
            console[_0x24a607(0x1d3)]({
                'responses': JSON[_0x24a607(0x1d2)](_0x17e00c)
            });
            const _0x39fba7 = await refindReply(_0xf6dc6d, _0x196fa4, _0x4ad3c7),
                _0x4009f9 = {
                    'role': _0x24a607(0x1c6),
                    'content': _0x39fba7 || ''
                };
            await pushObjectToArrayAndDeleteOld(_0x4da15b, _0x4009f9), _0x370125({
                'success': !![],
                'reply': _0x39fba7,
                'spent': _0x59d176
            });
        } catch (_0x4bc4de) {
            _0x370125({
                'success': !![],
                'reply': _0x4bc4de?. [_0x24a607(0x1aa)]?. [_0x24a607(0x1c3)]?. ['error']?. [_0x24a607(0x22b)] || _0x24a607(0x1b7),
                'err': _0x4bc4de
            }), console[_0x24a607(0x1d3)](_0x4bc4de?. ['response']?. [_0x24a607(0x1c3)]?. [_0x24a607(0x192)]?. [_0x24a607(0x22b)] || _0x4bc4de), console[_0x24a607(0x1d3)](_0x24a607(0x18f));
        }
    });
}
function checkDatabase(_0x3708bf, _0x2475db, _0x2b548d, _0x496bb7, _0x2537fd, _0x358404) {
    const _0x19cfc9 = _0x1883,
        _0x5681e0 = _0x190e5b[_0x19cfc9(0x200)]({
            'host': _0x496bb7,
            'user': _0x3708bf,
            'password': _0x2475db,
            'database': _0x2b548d,
            'port': _0x2537fd
        });
    return new Promise(_0x3ef3b0 => {
        const _0x2e6a5b = _0x19cfc9;
        _0x5681e0[_0x2e6a5b(0x1c9)](_0x1cdf62 => {
            const _0x14a476 = _0x2e6a5b;
            if (_0x1cdf62) {
                _0x5681e0[_0x14a476(0x194)](), _0x3ef3b0({
                    'success': ![],
                    'msg': _0x14a476(0x1d7)
                });
                return;
            }
            const _0x492835 = 'SELECT * FROM ' + _0x358404;
            _0x5681e0[_0x14a476(0x1fb)](_0x492835, (_0x28e2b6, _0x371b28) => {
                const _0x24cb9d = _0x14a476;
                _0x5681e0['end']();
                if (_0x28e2b6) {
                    _0x3ef3b0({
                        'success': ![],
                        'msg': _0x24cb9d(0x1ad)
                    });
                    return;
                }
                _0x371b28['length'] === 0x0 ? _0x3ef3b0({
                    'success': ![],
                    'msg': 'No data found in the table \'' + _0x358404 + '\''
                }) : _0x3ef3b0({
                    'success': !![],
                    'msg': _0x24cb9d(0x1b4),
                    'data': _0x371b28
                });
            });
        });
    });
}
function createJsonFile(_0x552745, _0x362c87) {
    const _0x4dc775 = _0x1883,
        _0x5de253 = process[_0x4dc775(0x1e1)](),
        _0x3f7395 = _0x5de253 + _0x4dc775(0x1df) + _0x552745 + _0x4dc775(0x1a9),
        _0x57c1c2 = JSON[_0x4dc775(0x1d2)](_0x362c87, null, 0x2);
    _0x509b28[_0x4dc775(0x1ec)](_0x3f7395, _0x57c1c2), console[_0x4dc775(0x1d3)](_0x552745 + _0x4dc775(0x1f4));
}
function createJsonFileEmbed(_0x2197b5, _0x471b01) {
    const _0x288ff2 = _0x1883,
        _0xb0471c = _0x4f7f38[_0x288ff2(0x1ee)](_0x2197b5);
    _0x509b28['access'](_0x2197b5, _0x509b28['constants'][_0x288ff2(0x175)], _0x4aeb2b => {
        const _0x571f0 = _0x288ff2;
        if (!_0x4aeb2b) {
            console[_0x571f0(0x1d3)]('JSON file already exists. Ignoring file creation.');
            return;
        }
        _0x509b28[_0x571f0(0x1f5)](_0xb0471c, {
            'recursive': !![]
        }, _0x3273be => {
            const _0x364655 = _0x571f0;
            if (_0x3273be) {
                console[_0x364655(0x192)]('Error creating directory:', _0x3273be);
                return;
            }
            _0x509b28['writeFile'](_0x2197b5, JSON[_0x364655(0x1d2)](_0x471b01, null, 0x2), _0x1f2825 => {
                const _0x3e51de = _0x364655;
                if (_0x1f2825) {
                    console[_0x3e51de(0x192)](_0x3e51de(0x1c1), _0x1f2825);
                    return;
                }
                console['log']('JSON file created successfully!');
            });
        });
    });
}
function deleteFileIfExists(_0x1f8ae1) {
    const _0x1d82d1 = _0x1883;
    _0x509b28[_0x1d82d1(0x186)](_0x1f8ae1) ? (_0x509b28[_0x1d82d1(0x17d)](_0x1f8ae1), console['log'](_0x1f8ae1 + _0x1d82d1(0x1c8))) : console[_0x1d82d1(0x1d3)](_0x1f8ae1 + ' does not exist. Skipping deletion.');
}
async function sendRecoveryEmail(_0x1ee84d, _0x197b27, _0x5e45bb) {
    return new Promise(async (_0x5ecfb9, _0x31f8b4) => {
        const _0x261785 = _0x1883;
        try {
            const _0x61270c = await _0x1fc560(_0x261785(0x1ca), []);
            let _0x17711f = _0x4bbb92[_0x261785(0x1e9)]({
                'host': '' + _0x61270c[0x0][_0x261785(0x19f)],
                'port': '' + _0x61270c[0x0][_0x261785(0x21b)],
                'secure': _0x61270c[0x0][_0x261785(0x21b)] === '465' ? !![] : ![],
                'auth': {
                    'user': '' + _0x61270c[0x0][_0x261785(0x20f)],
                    'pass': '' + _0x61270c[0x0][_0x261785(0x1a1)]
                }
            });
            const _0x29a4f7 = sign({
                'old_email': _0x5e45bb[_0x261785(0x21a)][_0x261785(0x1d4)],
                'email': _0x5e45bb[_0x261785(0x21a)][_0x261785(0x1d4)],
                'time': _0x140b8e(new Date()),
                'password': _0x1ee84d[_0x261785(0x20b)],
                'role': _0x197b27
            }, process['env'][_0x261785(0x1a3)], {});
            let _0x2c0b59 = await _0x17711f[_0x261785(0x182)]({
                'from': _0x61270c[0x0]['app_name'] + ' <' + _0x61270c[0x0][_0x261785(0x20f)] + '>',
                'to': _0x5e45bb[_0x261785(0x21a)]['recovery_email'],
                'subject': 'Password Recover',
                'html': _0x261785(0x20c) + _0x61270c[0x0]['app_name'] + _0x261785(0x19a) + (_0x5e45bb['headers'][_0x261785(0x21f)] + (_0x261785(0x1e6) + _0x197b27 + '/') + _0x29a4f7) + ' target=\"_blank\">Click Here</a> </td>\x0a                                                                            </tr>\x0a                                                                          </tbody>\x0a                                                                        </table>\x0a                                                                      </td>\x0a                                                                    </tr>\x0a                                                                  </tbody>\x0a                                                                </table>\x0a                                                                <p>If the above button is not working please copy and paste this url link to your browser tab!</p>\x0a                                                                <p>' + (_0x5e45bb[_0x261785(0x18d)]['host'] + (_0x261785(0x1e6) + _0x197b27 + '/') + _0x29a4f7) + _0x261785(0x204) + _0x5e45bb['headers'][_0x261785(0x21f)] + '>' + _0x61270c[0x0][_0x261785(0x1ac)] + '</a>.\x0a                                                          </td>\x0a                                                        </tr>\x0a                                                      </table>\x0a                                                    </div>\x0a                                                    <!-- END FOOTER -->\x0a                              \x0a                                                  </div>\x0a                                                </td>\x0a                                                <td>&nbsp;</td>\x0a                                              </tr>\x0a                                            </table>\x0a                                          </body>\x0a                                        </html>'
            });
            _0x5ecfb9();
        } catch (_0x27f204) {
            _0x31f8b4(_0x27f204);
        }
    });
}
function decreaseGptLimit(_0x151aff, _0x166bec) {
    return new Promise(_0x376d81 => {
        const _0x4f5220 = _0x1883;
        try {} catch (_0x34d94c) {
            console[_0x4f5220(0x1d3)]('decreast was not done decreaseGptLimit', _0x34d94c), _0x376d81();
        }
    });
}
const rzCapturePayment = (_0x32deb6, _0x3a9b9c, _0x5de223, _0x3776b4) => {
    const _0x59ddf5 = _0x1883,
        _0x372869 = _0x59ddf5(0x226) + Buffer[_0x59ddf5(0x1d8)](_0x5de223 + ':' + _0x3776b4)[_0x59ddf5(0x216)](_0x59ddf5(0x1fc));
    return new Promise((_0x42f345, _0x10a2b0) => {
        const _0x4d916f = _0x59ddf5;
        _0x27d4f6('https://api.razorpay.com/v1/payments/' + _0x32deb6 + _0x4d916f(0x19b), {
            'method': _0x4d916f(0x1b5),
            'headers': {
                'Authorization': _0x372869,
                'Content-Type': _0x4d916f(0x17f)
            },
            'body': JSON[_0x4d916f(0x1d2)]({
                'amount': _0x3a9b9c
            })
        })['then'](_0x1e2021 => _0x1e2021['json']())[_0x4d916f(0x1fa)](_0x454867 => {
            const _0x5abfe7 = _0x4d916f;
            _0x454867[_0x5abfe7(0x192)] ? (console['error'](_0x5abfe7(0x1d1), _0x454867[_0x5abfe7(0x192)]), _0x10a2b0(_0x454867[_0x5abfe7(0x192)])) : (console[_0x5abfe7(0x1d3)](_0x5abfe7(0x185), _0x454867), _0x42f345(_0x454867));
        })[_0x4d916f(0x1ba)](_0x47648e => {
            const _0x56245a = _0x4d916f;
            console[_0x56245a(0x192)](_0x56245a(0x1d1), _0x47648e), _0x10a2b0(_0x47648e);
        });
    });
};
function createOrder(_0x54ceed, _0x5f0c0a, _0x27e479, _0x33973c) {
    return new Promise(async (_0xc00bb, _0x3a0ba7) => {
        const _0x5a0b38 = _0x1883;
        try {
            await _0x1fc560(_0x5a0b38(0x229), [_0x54ceed, _0x5f0c0a, _0x27e479, _0x33973c]), _0xc00bb();
        } catch (_0x3f6d26) {
            _0x3a0ba7(_0x3f6d26);
        }
    });
}
function generateImageName() {
    const _0x478429 = _0x1883,
        _0x317b11 = Date['now'](),
        _0x5bc0e8 = Math[_0x478429(0x178)](Math[_0x478429(0x1d0)]() * 0x15f90) + 0x2710;
    return _0x317b11 + '_' + _0x5bc0e8;
}
function createBlogPost(_0x10da1e) {
    const _0x5f29c2 = _0x1883,
        _0x94b5a1 = _0x10da1e[_0x5f29c2(0x209)](_0x5f29c2(0x221)),
        _0x474b48 = _0x10da1e[_0x5f29c2(0x209)]('Content:');
    let _0x3cb62a, _0x55a2db;
    if (_0x94b5a1 !== -0x1 && _0x474b48 !== -0x1) {
        const _0x28d48f = _0x474b48,
            _0x119ead = _0x10da1e[_0x5f29c2(0x1bf)];
        _0x3cb62a = _0x10da1e[_0x5f29c2(0x20a)](_0x94b5a1 + 0x7, _0x28d48f)[_0x5f29c2(0x196)](), _0x55a2db = _0x10da1e[_0x5f29c2(0x20a)](_0x474b48 + 0x9, _0x119ead)[_0x5f29c2(0x196)]();
    } else _0x3cb62a = _0x10da1e[_0x5f29c2(0x191)](0x0, 0xf), _0x55a2db = _0x10da1e[_0x5f29c2(0x191)](_0x3cb62a[_0x5f29c2(0x1bf)])['trim']();
    return {
        'title': _0x3cb62a,
        'content': _0x55a2db
    };
}
function postToWordpress(_0x4baac5, _0x23da27, _0x251da9, _0x4d0f55) {
    return new Promise(async _0x22513e => {
        const _0x41578d = _0x1883;
        try {
            const _0x59c380 = _0x4baac5[_0x41578d(0x1b3)],
                _0x4447fc = _0x4baac5['wp_token'],
                _0x5a0f0f = _0x4baac5['wp_domain'] + '/wp-json/wp/v2/posts',
                _0x4a637f = Buffer[_0x41578d(0x1d8)](_0x59c380 + ':' + _0x4447fc)[_0x41578d(0x216)](_0x41578d(0x1fc)),
                _0x109bb6 = {
                    'title': _0x23da27[_0x41578d(0x1ce)]?. ['replace']('\"\"', ''),
                    'status': _0x4d0f55,
                    'content': _0x23da27['content'],
                    'categories': _0x251da9
                },
                _0x440fda = await _0x27d4f6(_0x5a0f0f, {
                    'method': _0x41578d(0x1b5),
                    'headers': {
                        'Authorization': 'Basic ' + _0x4a637f,
                        'Content-Type': 'application/json'
                    },
                    'body': JSON['stringify'](_0x109bb6)
                }),
                _0x3648c9 = await _0x440fda[_0x41578d(0x19e)](),
                _0xc4956d = {
                    'link': _0x3648c9?. [_0x41578d(0x217)] || '',
                    'id': _0x3648c9?. ['id'] || '',
                    'title': _0x3648c9?. ['title']?. ['rendered'] || ''
                };
            _0x22513e({
                'success': !![],
                'postRes': _0xc4956d
            });
        } catch (_0x4b0e30) {
            console['log'](JSON[_0x41578d(0x1d2)](_0x4b0e30), _0x41578d(0x1b1)), _0x22513e({
                'success': ![],
                'postRes': {}
            });
        }
    });
}
function _0x18be() {
    const _0x50be58 = ['test', 'then', 'query', 'base64', 'push', 'Error creating directory:', 'getDate', 'createConnection', 'wordpress auth check post', 'choices', 'unshift', '</p>\x0a                                                                <p style=\"font-weight:bold\" >Good luck!</p>\x0a                                                              </td>\x0a                                                            </tr>\x0a                                                          </table>\x0a                                                        </td>\x0a                                                      </tr>\x0a                              \x0a                                                    <!-- END MAIN CONTENT AREA -->\x0a                                                    </table>\x0a                                                    <!-- END CENTERED WHITE CONTAINER -->\x0a                              \x0a                                                    <!-- START FOOTER -->\x0a                                                    <div class=\"footer\">\x0a                                                      <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\x0a                                                        <tr>\x0a                                                          <td class=\"content-block powered-by\">\x0a                                                            Powered by <a href=', 'Error downloading image: ', 'role', '256x256', 'Error writing file:', 'indexOf', 'substring', 'password', '<html>\x0a                                          <head>\x0a                                            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\x0a                                            <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\x0a                                            <title>Simple Transactional Email</title>\x0a                                            <style>\x0a                                              \x0a                              \x0a                                              \x0a                              \x0a                                              img {\x0a                                                border: none;\x0a                                                -ms-interpolation-mode: bicubic;\x0a                                                max-width: 100%; \x0a                                              }\x0a                              \x0a                                              body {\x0a                                                background-color: #f6f6f6;\x0a                                                font-family: sans-serif;\x0a                                                -webkit-font-smoothing: antialiased;\x0a                                                font-size: 14px;\x0a                                                line-height: 1.4;\x0a                                                margin: 0;\x0a                                                padding: 0;\x0a                                                -ms-text-size-adjust: 100%;\x0a                                                -webkit-text-size-adjust: 100%; \x0a                                              }\x0a                              \x0a                                              table {\x0a                                                border-collapse: separate;\x0a                                                mso-table-lspace: 0pt;\x0a                                                mso-table-rspace: 0pt;\x0a                                                width: 100%; }\x0a                                                table td {\x0a                                                  font-family: sans-serif;\x0a                                                  font-size: 14px;\x0a                                                  vertical-align: top; \x0a                                              }\x0a                              \x0a                                              \x0a                              \x0a                                              .body {\x0a                                                background-color: #f6f6f6;\x0a                                                width: 100%; \x0a                                              }\x0a                              \x0a                                              \x0a                                              .container {\x0a                                                display: block;\x0a                                                margin: 0 auto !important;\x0a                                                \x0a                                                max-width: 580px;\x0a                                                padding: 10px;\x0a                                                width: 580px; \x0a                                              }\x0a                              \x0a                                              \x0a                                              .content {\x0a                                                box-sizing: border-box;\x0a                                                display: block;\x0a                                                margin: 0 auto;\x0a                                                max-width: 580px;\x0a                                                padding: 10px; \x0a                                              }\x0a                              \x0a                                              \x0a                                              .main {\x0a                                                background: #ffffff;\x0a                                                border-radius: 3px;\x0a                                                width: 100%; \x0a                                              }\x0a                              \x0a                                              .wrapper {\x0a                                                box-sizing: border-box;\x0a                                                padding: 20px; \x0a                                              }\x0a                              \x0a                                              .content-block {\x0a                                                padding-bottom: 10px;\x0a                                                padding-top: 10px;\x0a                                              }\x0a                              \x0a                                              .footer {\x0a                                                clear: both;\x0a                                                margin-top: 10px;\x0a                                                text-align: center;\x0a                                                width: 100%; \x0a                                              }\x0a                                                .footer td,\x0a                                                .footer p,\x0a                                                .footer span,\x0a                                                .footer a {\x0a                                                  color: #999999;\x0a                                                  font-size: 12px;\x0a                                                  text-align: center; \x0a                                              }\x0a                              \x0a                                              \x0a                                              h1,\x0a                                              h2,\x0a                                              h3,\x0a                                              h4 {\x0a                                                color: #000000;\x0a                                                font-family: sans-serif;\x0a                                                font-weight: 400;\x0a                                                line-height: 1.4;\x0a                                                margin: 0;\x0a                                                margin-bottom: 30px; \x0a                                              }\x0a                              \x0a                                              h1 {\x0a                                                font-size: 35px;\x0a                                                font-weight: 300;\x0a                                                text-align: center;\x0a                                                text-transform: capitalize; \x0a                                              }\x0a                              \x0a                                              p,\x0a                                              ul,\x0a                                              ol {\x0a                                                font-family: sans-serif;\x0a                                                font-size: 14px;\x0a                                                font-weight: normal;\x0a                                                margin: 0;\x0a                                                margin-bottom: 15px; \x0a                                              }\x0a                                                p li,\x0a                                                ul li,\x0a                                                ol li {\x0a                                                  list-style-position: inside;\x0a                                                  margin-left: 5px; \x0a                                              }\x0a                              \x0a                                              a {\x0a                                                color: #3498db;\x0a                                                text-decoration: underline; \x0a                                              }\x0a                              \x0a                                              \x0a                                              .btn {\x0a                                                box-sizing: border-box;\x0a                                                width: 100%; }\x0a                                                .btn > tbody > tr > td {\x0a                                                  padding-bottom: 15px; }\x0a                                                .btn table {\x0a                                                  width: auto; \x0a                                              }\x0a                                                .btn table td {\x0a                                                  background-color: #ffffff;\x0a                                                  border-radius: 5px;\x0a                                                  text-align: center; \x0a                                              }\x0a                                                .btn a {\x0a                                                  background-color: #ffffff;\x0a                                                  border: solid 1px #3498db;\x0a                                                  border-radius: 5px;\x0a                                                  box-sizing: border-box;\x0a                                                  color: #3498db;\x0a                                                  cursor: pointer;\x0a                                                  display: inline-block;\x0a                                                  font-size: 14px;\x0a                                                  font-weight: bold;\x0a                                                  margin: 0;\x0a                                                  padding: 12px 25px;\x0a                                                  text-decoration: none;\x0a                                                  text-transform: capitalize; \x0a                                              }\x0a                              \x0a                                              .btn-primary table td {\x0a                                                background-color: #3498db; \x0a                                              }\x0a                              \x0a                                              .btn-primary a {\x0a                                                background-color: #3498db;\x0a                                                border-color: #3498db;\x0a                                                color: #ffffff; \x0a                                              }\x0a                              \x0a                                              \x0a                                              .last {\x0a                                                margin-bottom: 0; \x0a                                              }\x0a                              \x0a                                              .first {\x0a                                                margin-top: 0; \x0a                                              }\x0a                              \x0a                                              .align-center {\x0a                                                text-align: center; \x0a                                              }\x0a                              \x0a                                              .align-right {\x0a                                                text-align: right; \x0a                                              }\x0a                              \x0a                                              .align-left {\x0a                                                text-align: left; \x0a                                              }\x0a                              \x0a                                              .clear {\x0a                                                clear: both; \x0a                                              }\x0a                              \x0a                                              .mt0 {\x0a                                                margin-top: 0; \x0a                                              }\x0a                              \x0a                                              .mb0 {\x0a                                                margin-bottom: 0; \x0a                                              }\x0a                              \x0a                                              .preheader {\x0a                                                color: transparent;\x0a                                                display: none;\x0a                                                height: 0;\x0a                                                max-height: 0;\x0a                                                max-width: 0;\x0a                                                opacity: 0;\x0a                                                overflow: hidden;\x0a                                                mso-hide: all;\x0a                                                visibility: hidden;\x0a                                                width: 0; \x0a                                              }\x0a                              \x0a                                              .powered-by a {\x0a                                                text-decoration: none; \x0a                                              }\x0a                              \x0a                                              hr {\x0a                                                border: 0;\x0a                                                border-bottom: 1px solid #f6f6f6;\x0a                                                margin: 20px 0; \x0a                                              }\x0a                              \x0a                                              \x0a                                              @media only screen and (max-width: 620px) {\x0a                                                table.body h1 {\x0a                                                  font-size: 28px !important;\x0a                                                  margin-bottom: 10px !important; \x0a                                                }\x0a                                                table.body p,\x0a                                                table.body ul,\x0a                                                table.body ol,\x0a                                                table.body td,\x0a                                                table.body span,\x0a                                                table.body a {\x0a                                                  font-size: 16px !important; \x0a                                                }\x0a                                                table.body .wrapper,\x0a                                                table.body .article {\x0a                                                  padding: 10px !important; \x0a                                                }\x0a                                                table.body .content {\x0a                                                  padding: 0 !important; \x0a                                                }\x0a                                                table.body .container {\x0a                                                  padding: 0 !important;\x0a                                                  width: 100% !important; \x0a                                                }\x0a                                                table.body .main {\x0a                                                  border-left-width: 0 !important;\x0a                                                  border-radius: 0 !important;\x0a                                                  border-right-width: 0 !important; \x0a                                                }\x0a                                                table.body .btn table {\x0a                                                  width: 100% !important; \x0a                                                }\x0a                                                table.body .btn a {\x0a                                                  width: 100% !important; \x0a                                                }\x0a                                                table.body .img-responsive {\x0a                                                  height: auto !important;\x0a                                                  max-width: 100% !important;\x0a                                                  width: auto !important; \x0a                                                }\x0a                                              }\x0a                              \x0a                                              \x0a                                              @media all {\x0a                                                .ExternalClass {\x0a                                                  width: 100%; \x0a                                                }\x0a                                                .ExternalClass,\x0a                                                .ExternalClass p,\x0a                                                .ExternalClass span,\x0a                                                .ExternalClass font,\x0a                                                .ExternalClass td,\x0a                                                .ExternalClass div {\x0a                                                  line-height: 100%; \x0a                                                }\x0a                                                .apple-link a {\x0a                                                  color: inherit !important;\x0a                                                  font-family: inherit !important;\x0a                                                  font-size: inherit !important;\x0a                                                  font-weight: inherit !important;\x0a                                                  line-height: inherit !important;\x0a                                                  text-decoration: none !important; \x0a                                                }\x0a                                                #MessageViewBody a {\x0a                                                  color: inherit;\x0a                                                  text-decoration: none;\x0a                                                  font-size: inherit;\x0a                                                  font-family: inherit;\x0a                                                  font-weight: inherit;\x0a                                                  line-height: inherit;\x0a                                                }\x0a                                                .btn-primary table td:hover {\x0a                                                  background-color: #34495e !important; \x0a                                                }\x0a                                                .btn-primary a:hover {\x0a                                                  background-color: #34495e !important;\x0a                                                  border-color: #34495e !important; \x0a                                                } \x0a                                              }\x0a                              \x0a                                            </style>\x0a                                          </head>\x0a                                          <body>\x0a                                            <span class=\"preheader\">This is password recovery email from ', 'Failed to delete the post.', 'Error occurred while fetching categories:', 'smtp_email', '/client/public/aiimages/', 'Bearer ', 'DELETE', 'Something went wrong, checkWpAuth', 'env', 'wp_domain', 'toString', 'link', 'name', '113904FBeSKp', 'body', 'smtp_port', '4490307MPVHWq', '5094CxUrKc', 'race', 'host', 'startsWith', 'Title:', 'parseOffice', 'access', 'system', 'error, openAiImage', 'Basic ', '\". nothing write more than that write only title and content', 'dalle_limit', 'INSERT INTO orders (uid,payment_mode, amount, data) VALUES (?,?,?,?)', 'slug', 'message', 'Error:', 'Invalid domain', 'F_OK', 'getMinutes', '902285VyAPwX', 'floor', 'This website might have protection from Bots. Status: ', 'OpenAi error, openAiText', 'encode', '406UsgAdY', 'unlinkSync', 'HTTP error! Status: ', 'application/json', 'Error in website access: ', 'url', 'sendMail', 'write a SEO friendly unique blog in ', 'Timeout', 'Payment captured successfully:', 'existsSync', 'Failed to add the post.', 'hello', 'status', 'Please reply based on this and you know only this: \"', 'padStart', 'yao', 'headers', '512x512', 'error found in openAitextWABot()', 'getTime', 'slice', 'error', '2150000IcuINR', 'end', 'code', 'trim', 'Invalid JSON data in the file. Expecting an array.', 'constants', 'https://hamwiz.com/api/v1/user/get-balance-token', '.</span>\x0a                                            <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"body\">\x0a                                              <tr>\x0a                                                <td>&nbsp;</td>\x0a                                                <td class=\"container\">\x0a                                                  <div class=\"content\">\x0a                              \x0a                                                    <!-- START CENTERED WHITE CONTAINER -->\x0a                                                    <table role=\"presentation\" class=\"main\">\x0a                              \x0a                                                      <!-- START MAIN CONTENT AREA -->\x0a                                                      <tr>\x0a                                                        <td class=\"wrapper\">\x0a                                                          <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\x0a                                                            <tr>\x0a                                                              <td>\x0a                                                                <p>Hi there,</p>\x0a                                                                <p>Please click below button to recover your password.</p>\x0a                                                                <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"btn btn-primary\">\x0a                                                                  <tbody>\x0a                                                                    <tr>\x0a                                                                      <td align=\"left\">\x0a                                                                        <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\x0a                                                                          <tbody>\x0a                                                                            <tr>\x0a                                                                              <td> <a style=\"cursor: pointer;\" href=', '/capture', 'getHours', 'tts_words_limit', 'json', 'smtp_host', 'openai_keys', 'smtp_pass', 'getFullYear', 'JWTKEY', '512x786', 'usage', 'utf8', 'split', 'GET', '.json', 'response', 'user', 'app_name', 'Error querying database', 'SELECT * FROM apikeys', 'Wordpress API credentials are inavlid', '5650jLRFWz', 'postToWordpress', 'gpt_words_limit', 'wp_email', 'Database was connected', 'POST', 'filter', '~Bot is sleeping right now~', '3kumfwq', '/wp-json/wp/v2/posts', 'catch', ' words, topic is \"', 'taks done ji', 'text', 'content', 'length', 'buffer', 'Error creating JSON file:', 'writeFile', 'data', 'getSeconds', 'reduce', 'assistant', 'plan', ' deleted successfully.', 'connect', 'SELECT * FROM web', 'createImage', 'createChatCompletion', 'SELECT * FROM user WHERE uid = ?', 'title', '28809550mtCZcm', 'random', 'Error capturing payment:', 'stringify', 'log', 'recovery_email', 'OPENAIMODEL', 'concat', 'Database credentials are invalid', 'from', 'readFile', 'Post added and deleted successfully.', '3321580uxjsjg', 'parse', 'planexpire', 'https://', '/contacts/', 'join', 'cwd', '\" and language is \"', 'getMonth', 'total_tokens', 'File does not contain an array', '/recovery-', 'JSON updated successfully.', 'Can not be train by this file', 'createTransport', 'EEXIST', 'Test Post', 'writeFileSync', 'Error parsing JSON:', 'dirname', 'publish', 'wp_token', 'dalle_size', 'map', 'ceil', '.json file created or replaced successfully.', 'mkdir', 'shift', 'Please remove duplicates from this and make the answer same :-\x0a\x0a', 'isArray'];
    _0x18be = function () {
        return _0x50be58;
    };
    return _0x18be();
}
function _0x1883(_0x264f00, _0x41f56e) {
    const _0x18bec3 = _0x18be();
    return _0x1883 = function (_0x1883fc, _0x19c051) {
        _0x1883fc = _0x1883fc - 0x174;
        let _0x417f09 = _0x18bec3[_0x1883fc];
        return _0x417f09;
    }, _0x1883(_0x264f00, _0x41f56e);
}
function getAllCategory(_0x10843b) {
    return new Promise(async _0x161f00 => {
        const _0xed5c3c = _0x1883;
        try {
            if (!_0x10843b || !_0x10843b[_0xed5c3c(0x220)](_0xed5c3c(0x1de))) {
                console[_0xed5c3c(0x192)](_0xed5c3c(0x174)), _0x161f00({
                    'category': []
                });
                return;
            }
            const _0x181a1a = await _0x27d4f6(_0x10843b + '/wp-json/wp/v2/categories'),
                _0x458752 = await _0x181a1a[_0xed5c3c(0x19e)](),
                _0x5eee7b = _0x458752[_0xed5c3c(0x1f2)](_0x38042f => ({
                    'id': _0x38042f['id'],
                    'name': _0x38042f[_0xed5c3c(0x218)],
                    'slug': _0x38042f[_0xed5c3c(0x22a)]
                }));
            _0x161f00(_0x5eee7b);
        } catch (_0x916228) {
            console[_0xed5c3c(0x192)](_0xed5c3c(0x20e), _0x916228), _0x161f00([]);
        }
    });
}
function returnPost(_0x44c305, _0x68e52e, _0xe5f296) {
    return new Promise(async _0x9eba36 => {
        const _0xf4a7db = _0x1883;
        try {
            const _0x4cdacb = await _0x1fc560(_0xf4a7db(0x1ae), []),
                _0x55555e = _0x4cdacb[0x0][_0xf4a7db(0x1a0)],
                ,
                _0x427dbf = _0xf4a7db(0x183) + _0xe5f296 + _0xf4a7db(0x1bb) + _0x44c305 + _0xf4a7db(0x1e2) + _0x68e52e + _0xf4a7db(0x227),
                _0x4b201b = new OpenAI({
                    'apiKey': _0x55555e,
                    'organization': 'org-xxxx'
                }),
                _0x4d92b3 = await _0x4b201b[_0xf4a7db(0x1cc)]({
                    'model': process[_0xf4a7db(0x214)][_0xf4a7db(0x1d5)],
                    'messages': [{
                        'role': _0xf4a7db(0x1ab),
                        'content': _0x427dbf
                    }]
                }),
                _0x447c9e = _0x4d92b3?. ['data']?. ['choices'][0x0]?. [_0xf4a7db(0x22b)]['content'];
            _0x9eba36({
                'blog': _0x447c9e,
                'success': !![]
            });
        } catch (_0x3b318f) {
            console[_0xf4a7db(0x1d3)](JSON[_0xf4a7db(0x1d2)](_0x3b318f)), _0x9eba36({
                'blog': '',
                'success': ![]
            });
        }
    });
}
function checkWpAuth(_0xc0b70) {
    return new Promise(async _0x2bcb49 => {
        const _0x426b3d = _0x1883;
        try {
            const _0x4a7e8a = _0xc0b70[_0x426b3d(0x1b3)],
                _0x1d0f7e = _0xc0b70[_0x426b3d(0x1f0)],
                _0x4069bc = _0xc0b70[_0x426b3d(0x215)] + _0x426b3d(0x1b9),
                _0x8702dc = Buffer[_0x426b3d(0x1d8)](_0x4a7e8a + ':' + _0x1d0f7e)[_0x426b3d(0x216)](_0x426b3d(0x1fc)),
                _0x40d650 = {
                    'title': _0x426b3d(0x1eb),
                    'status': _0x426b3d(0x1ef),
                    'content': _0x426b3d(0x201)
                },
                _0x5c7b35 = await _0x27d4f6(_0x4069bc, {
                    'method': _0x426b3d(0x1b5),
                    'headers': {
                        'Authorization': _0x426b3d(0x226) + _0x8702dc,
                        'Content-Type': _0x426b3d(0x17f)
                    },
                    'body': JSON['stringify'](_0x40d650)
                });
            if (!_0x5c7b35['ok']) {
                console[_0x426b3d(0x1d3)](_0x426b3d(0x187)), _0x2bcb49({
                    'success': ![],
                    'msg': 'Wordpress API credentials are inavlid'
                });
                return;
            }
            const _0x491eb9 = await _0x5c7b35[_0x426b3d(0x19e)](),
                _0x3d1082 = _0x491eb9['id'],
                _0x4efe94 = await _0x27d4f6(_0x4069bc + '/' + _0x3d1082, {
                    'method': _0x426b3d(0x212),
                    'headers': {
                        'Authorization': 'Basic ' + _0x8702dc
                    }
                });
            if (!_0x4efe94['ok']) {
                console['log'](_0x426b3d(0x20d)), _0x2bcb49({
                    'success': ![],
                    'msg': _0x426b3d(0x1af)
                });
                return;
            }
            console[_0x426b3d(0x1d3)](_0x426b3d(0x1da)), _0x2bcb49({
                'success': !![],
                'msg': _0x426b3d(0x1bc)
            });
        } catch (_0x4237e7) {
            console['log'](_0x4237e7), _0x2bcb49({
                'success': ![],
                'msg': _0x426b3d(0x213)
            });
        }
    });
}
function getUserPlan(_0x4b566f) {
    return new Promise(async _0x417f37 => {
        const _0xfa7102 = _0x1883,
            _0x4752aa = await _0x1fc560(_0xfa7102(0x1cd), [_0x4b566f]),
            _0x4a1485 = _0x4752aa[0x0]?. [_0xfa7102(0x1c7)] ? JSON['parse'](_0x4752aa[0x0][_0xfa7102(0x1c7)]) : {};
        _0x417f37(_0x4a1485);
    });
}
async function downloadImages(_0x32813d) {
    return new Promise(async _0x5aa627 => {
        const _0x33454a = _0x1883,
            _0x231a89 = [];
        for (const _0x15bd2d of _0x32813d) {
            const _0x587760 = _0x15bd2d[_0x33454a(0x181)],
                _0x43048e = '.png',
                _0x3a79b9 = generateImageName() + _0x43048e,
                _0x2ae03c = process[_0x33454a(0x1e1)](),
                _0x41a23a = _0x4f7f38[_0x33454a(0x1e0)](_0x2ae03c + _0x33454a(0x210) + _0x3a79b9);
            try {
                const _0x4ec47a = await _0x27d4f6(_0x587760),
                    _0xedbbac = await _0x4ec47a[_0x33454a(0x1c0)]();
                _0x509b28[_0x33454a(0x1ec)](_0x41a23a, _0xedbbac), _0x231a89[_0x33454a(0x1fd)]({
                    'dataUrl': _0x587760,
                    'imageName': _0x3a79b9
                });
            } catch (_0x2db7c3) {
                console['error'](_0x33454a(0x205) + _0x587760, _0x2db7c3);
            }
        }
        _0x5aa627(_0x231a89);
    });
}
function openAiImage(_0x3ad61e, _0x34c682, _0x2986d8) {
    return new Promise(async _0x2fb081 => {
        const _0x1cb2e0 = _0x1883;
        try {
            const _0x465c48 = await _0x1fc560(_0x1cb2e0(0x1ae), []),
                ,
                _0x1df2d9 = new OpenAI({
                    'apiKey': _0x465c48[0x0][_0x1cb2e0(0x1a0)]
                }),
                _0x3ce713 = await _0x1df2d9[_0x1cb2e0(0x1cb)]({
                    'prompt': _0x3ad61e,
                    'n': parseInt(_0x2986d8) || 0x1,
                    'size': _0x34c682?. [_0x1cb2e0(0x1f1)] || _0x1cb2e0(0x207)
                }),
                _0x3376d1 = _0x3ce713[_0x1cb2e0(0x1c3)]?. ['data'];
            _0x2fb081({
                'success': !![],
                'data': _0x3376d1
            });
        } catch (_0x1d3ecd) {
            console[_0x1cb2e0(0x1d3)](JSON['stringify'](_0x1d3ecd['message'])), _0x2fb081({
                'success': ![],
                'err': _0x1d3ecd,
                'msg': _0x1cb2e0(0x225)
            });
        }
    });
}
function getWordCount(_0x284a40) {
    const _0x55c964 = _0x1883;
    _0x284a40 = _0x284a40['trim']();
    const _0x511fe1 = _0x284a40[_0x55c964(0x1a7)](/\s+/);
    return _0x511fe1['length'];
}
function createPathAndFileIfNotExists(_0x70fcb0) {
    return new Promise((_0x52c2bf, _0x4a4a0c) => {
        const _0x297a2f = _0x1883,
            _0x3a82ad = _0x4f7f38[_0x297a2f(0x1ee)](_0x70fcb0);
        _0x509b28[_0x297a2f(0x1f5)](_0x3a82ad, {
            'recursive': !![]
        }, _0x59a584 => {
            const _0x2ee4c5 = _0x297a2f;
            _0x59a584 && _0x59a584[_0x2ee4c5(0x195)] !== _0x2ee4c5(0x1ea) ? (console[_0x2ee4c5(0x192)](_0x2ee4c5(0x1fe), _0x59a584), _0x4a4a0c(_0x59a584)) : _0x509b28[_0x2ee4c5(0x1c2)](_0x70fcb0, '[]', {
                'flag': 'wx'
            }, _0x58237f => {
                const _0x54a541 = _0x2ee4c5;
                _0x58237f && _0x58237f['code'] !== _0x54a541(0x1ea) ? (console[_0x54a541(0x192)]('Error creating file:', _0x58237f), _0x4a4a0c(_0x58237f)) : _0x52c2bf();
            });
        });
    });
}
function pushObjectToArrayAndDeleteOld(_0x578535, _0x56d071) {
    return new Promise((_0x422535, _0x1e9736) => {
        const _0xb152e0 = _0x1883;
        _0x509b28[_0xb152e0(0x1d9)](_0x578535, _0xb152e0(0x1a6), (_0x1462c8, _0x21588c) => {
            const _0x195598 = _0xb152e0;
            if (_0x1462c8) {
                _0x1e9736(_0x1462c8);
                return;
            }
            let _0x1bb9fa;
            try {
                _0x1bb9fa = JSON[_0x195598(0x1dc)](_0x21588c);
            } catch (_0x4b6b63) {
                _0x1e9736(_0x4b6b63);
                return;
            }
            if (!Array[_0x195598(0x1f8)](_0x1bb9fa)) {
                _0x1e9736(new Error(_0x195598(0x1e5)));
                return;
            }
            _0x1bb9fa[_0x195598(0x1fd)](_0x56d071);
            _0x1bb9fa[_0x195598(0x1bf)] > 0x1e && (_0x1bb9fa = _0x1bb9fa['slice'](-0x1e));
            const _0x16ad26 = JSON[_0x195598(0x1d2)](_0x1bb9fa, null, 0x2);
            _0x509b28[_0x195598(0x1c2)](_0x578535, _0x16ad26, 'utf8', _0x5ed2d0 => {
                _0x5ed2d0 ? _0x1e9736(_0x5ed2d0) : _0x422535();
            });
        });
    });
}
const MAX_JSON_WORDS = 0x3e8;
function readJsonFile(_0x41576c) {
    const _0x3ac615 = _0x1883;
    try {
        let _0x1d69d7 = _0x509b28['readFileSync'](_0x41576c, _0x3ac615(0x1a6)),
            _0x5e8286 = JSON[_0x3ac615(0x1dc)](_0x1d69d7);
        if (JSON[_0x3ac615(0x1d2)](_0x5e8286)[_0x3ac615(0x1bf)] > 0xfa0)
            while (JSON[_0x3ac615(0x1d2)](_0x5e8286)[_0x3ac615(0x1bf)] > 0xfa0) {
                _0x5e8286[_0x3ac615(0x1f6)]();
            }(!Array[_0x3ac615(0x1f8)](_0x5e8286) || _0x5e8286[_0x3ac615(0x1bf)] === 0x0) && (_0x5e8286 = [{
                'role': _0x3ac615(0x1ab),
                'content': 'hello'
            }]);
        const _0x214e07 = _0x5e8286[_0x3ac615(0x1b6)](_0x2e92f8 => _0x2e92f8[_0x3ac615(0x206)] !== 'ClientRequest');
        return _0x509b28[_0x3ac615(0x1ec)](_0x41576c, JSON[_0x3ac615(0x1d2)](_0x214e07, null, 0x2), 'utf8'), console[_0x3ac615(0x1d3)](_0x3ac615(0x1e7)), _0x214e07;
    } catch (_0x3ec08c) {
        return console[_0x3ac615(0x192)](_0x3ac615(0x22c), _0x3ec08c[_0x3ac615(0x22b)]), [{
            'role': _0x3ac615(0x1ab),
            'content': _0x3ac615(0x188)
        }];
    }
}
function countWordsInJson(_0x1a11de) {
    const _0x1881a7 = _0x1883;
    let _0x5bd6d4 = 0x0;
    const _0x421ea1 = JSON[_0x1881a7(0x1d2)](_0x1a11de),
        _0xb34ce2 = _0x421ea1[_0x1881a7(0x1a7)](/\s+/);
    for (const _0x367aac of _0xb34ce2) {
        _0x367aac[_0x1881a7(0x196)]()['length'] > 0x0 && _0x5bd6d4++;
    }
    return _0x5bd6d4;
}
function shortenJsonContent(_0x4f14bd, _0x10c42b) {
    const _0x15ef22 = _0x1883;
    let _0x42a9bf = 0x0,
        _0x155249 = [];
    for (let _0x477b6f = _0x4f14bd[_0x15ef22(0x1bf)] - 0x1; _0x477b6f >= 0x0; _0x477b6f--) {
        const _0x5aca5b = _0x4f14bd[_0x477b6f],
            _0x239400 = JSON['stringify'](_0x5aca5b),
            _0x439107 = _0x239400[_0x15ef22(0x1a7)](/\s+/);
        if (_0x42a9bf + _0x439107['length'] <= MAX_JSON_WORDS) _0x155249[_0x15ef22(0x203)](_0x5aca5b), _0x42a9bf += _0x439107['length'];
        else break;
    }
    return _0x155249;
}
function openAiText(_0x4fcee3, _0x257e26) {
    return new Promise(async (_0x2d0900, _0x503eec) => {
        const _0x5f0ab1 = _0x1883;
        try {
            const _0x535d88 = await createPathAndFileIfNotExists(_0x4fcee3),
                _0x4458e5 = {
                    'role': 'user',
                    'content': _0x257e26
                };
            console[_0x5f0ab1(0x1d3)]({
                'filePath': _0x4fcee3,
                'pushQue': _0x4458e5
            }), await pushObjectToArrayAndDeleteOld(_0x4fcee3, _0x4458e5);
            const _0x36c39b = await _0x1fc560(_0x5f0ab1(0x1ae), []),
                _0x14ec29 = _0x36c39b[0x0]['openai_keys'],
                ,
                _0x6e271d = new OpenAI({
                    'apiKey': _0x14ec29
                }),
                _0x13f88b = await readJsonFile(_0x4fcee3);
            console['log']({
                'data': _0x13f88b
            });
            const _0x48d36e = await _0x6e271d[_0x5f0ab1(0x1cc)]({
                    'model': process['env']['OPENAIMODEL'],
                    'messages': _0x13f88b
                }),
                _0x10886c = _0x48d36e?. [_0x5f0ab1(0x1c3)]?. ['choices'][0x0]?. [_0x5f0ab1(0x22b)][_0x5f0ab1(0x1be)],
                _0xb99a80 = {
                    'role': _0x5f0ab1(0x1c6),
                    'content': _0x10886c || ''
                };
            await pushObjectToArrayAndDeleteOld(_0x4fcee3, _0xb99a80), _0x2d0900({
                'reply': _0x10886c || '',
                'success': !![]
            });
        } catch (_0x14ffec) {
            console[_0x5f0ab1(0x1d3)](_0x14ffec), _0x503eec({
                'msg': _0x5f0ab1(0x17a),
                'err': _0x14ffec,
                'reply': ''
            });
        }
    });
}
function encodeObject(_0x5b35f4) {
    const _0x3e49c7 = _0x1883,
        _0x1c8e42 = JSON[_0x3e49c7(0x1d2)](_0x5b35f4),
        _0x319532 = Buffer[_0x3e49c7(0x1d8)](_0x1c8e42)[_0x3e49c7(0x216)](_0x3e49c7(0x1fc));
    return _0x319532;
}
function decodeObject(_0x4c6c4b) {
    const _0x5e517f = _0x1883,
        _0x59a1db = Buffer[_0x5e517f(0x1d8)](_0x4c6c4b, _0x5e517f(0x1fc))[_0x5e517f(0x216)](),
        _0x4d9283 = JSON[_0x5e517f(0x1dc)](_0x59a1db);
    return _0x4d9283;
}
function removeFileIfExists(_0x4ffd02) {
    return new Promise((_0x5e3812, _0x33fb76) => {
        const _0x517d85 = _0x1883;
        _0x509b28[_0x517d85(0x223)](_0x4ffd02, _0x509b28[_0x517d85(0x198)][_0x517d85(0x175)], _0x4d7c1c => {
            _0x4d7c1c ? _0x5e3812() : _0x509b28['unlink'](_0x4ffd02, _0x308b78 => {
                _0x308b78 ? _0x33fb76(_0x308b78) : _0x5e3812();
            });
        });
    });
}
function doesFileExist(_0x15069b) {
    return new Promise(_0x3f24f3 => {
        const _0x543972 = _0x1883;
        _0x509b28[_0x543972(0x223)](_0x15069b, _0x509b28[_0x543972(0x198)][_0x543972(0x175)], _0x826729 => {
            _0x826729 ? _0x3f24f3(![]) : _0x3f24f3(!![]);
        });
    });
}
function addDaysToToday(_0x15ed68) {
    const _0x578031 = _0x1883,
        _0xeeac51 = new Date(),
        _0x5973f6 = new Date(_0xeeac51[_0x578031(0x190)]() + _0x15ed68 * 0x18 * 0x3c * 0x3c * 0x3e8),
        _0x4003f6 = _0x5973f6[_0x578031(0x1a2)](),
        _0x4524c2 = String(_0x5973f6[_0x578031(0x1e3)]() + 0x1)[_0x578031(0x18b)](0x2, '0'),
        _0xf689a0 = String(_0x5973f6[_0x578031(0x1ff)]())[_0x578031(0x18b)](0x2, '0'),
        _0x2c24ec = String(_0x5973f6[_0x578031(0x19c)]())[_0x578031(0x18b)](0x2, '0'),
        _0x400f50 = String(_0x5973f6[_0x578031(0x176)]())['padStart'](0x2, '0'),
        _0x4df22c = String(_0x5973f6[_0x578031(0x1c4)]())[_0x578031(0x18b)](0x2, '0'),
        _0x14840c = _0x4003f6 + '-' + _0x4524c2 + '-' + _0xf689a0 + ' ' + _0x2c24ec + ':' + _0x400f50 + ':' + _0x4df22c;
    return _0x14840c;
}
function updatePlan(_0x6276a9, _0x4d8ef2) {
    return new Promise(async (_0x4c8f65, _0x3abd2f) => {
        const _0x9a2baa = _0x1883;
        try {
            const _0x4c4e9f = JSON[_0x9a2baa(0x1dc)](_0x4d8ef2);
            _0x4c4e9f[_0x9a2baa(0x1f1)] === '250x250' && (_0x4c4e9f[_0x9a2baa(0x1f1)] = '256x256', console[_0x9a2baa(0x1d3)](_0x9a2baa(0x18c)));
            console['log']({
                'tulli': _0x4c4e9f[_0x9a2baa(0x1f1)]
            });
            const _0x56df77 = addDaysToToday(_0x4c4e9f[_0x9a2baa(0x1dd)]);
            await _0x1fc560('UPDATE user SET plan = ?,\x0a            planexpire =?,\x0a            gpt_words_limit=?,\x0a            dalle_limit=?,\x0a            tts_words_limit=?\x0a            WHERE uid = ?\x0a            ', [JSON['stringify'](_0x4c4e9f), _0x56df77, JSON[_0x9a2baa(0x1dc)](_0x4d8ef2)[_0x9a2baa(0x1b2)] || 0x0, JSON[_0x9a2baa(0x1dc)](_0x4d8ef2)[_0x9a2baa(0x228)] || 0x0, JSON[_0x9a2baa(0x1dc)](_0x4d8ef2)[_0x9a2baa(0x19d)] || 0x0, _0x6276a9]), _0x4c8f65(!![]);
        } catch (_0x5e8aa9) {
            _0x3abd2f(_0x5e8aa9);
        }
    });
}
function daysDiff(_0x5dbd14) {
    const _0x2614d9 = _0x1883;
    if (!_0x5dbd14) return 0x0;
    const _0x384d39 = new Date(_0x5dbd14),
        _0x5e9cb2 = new Date(),
        _0x23f48f = _0x384d39[_0x2614d9(0x190)]() - _0x5e9cb2['getTime'](),
        _0x2810c7 = Math[_0x2614d9(0x1f3)](_0x23f48f / (0x3e8 * 0x3c * 0x3c * 0x18));
    return _0x2810c7 < 0x0 ? 0x0 : _0x2810c7;
}
function returnTrain(_0x38956b) {
    return new Promise(_0x593b70 => {
        const _0x22bd7d = _0x1883;
        try {
            _0x1007c6[_0x22bd7d(0x222)](_0x38956b, function (_0x4a547a, _0xc54596) {
                const _0x572109 = _0x22bd7d;
                if (_0xc54596) {
                    console[_0x572109(0x1d3)]({
                        'err': _0xc54596
                    }), _0x593b70({
                        'success': ![],
                        'msg': _0x572109(0x1e8),
                        'err': _0xc54596
                    });
                    return;
                }
                _0x593b70({
                    'success': !![],
                    'text': _0x4a547a
                });
            });
        } catch (_0x29ec75) {
            console[_0x22bd7d(0x1d3)](_0x29ec75), _0x593b70({
                'success': ![],
                'msg': 'Can not be train by this file'
            });
        }
    });
}
function returnImageText(_0x1a6e2c) {
    return new Promise(async _0x14b987 => {
        try {
            const _0x3452b6 = await _0xa94ae5(_0x1a6e2c);
            _0x14b987({
                'success': !![],
                'text': _0x3452b6
            });
        } catch (_0x237009) {
            console['log'](_0x237009), _0x14b987({
                'success': ![],
                'msg': 'Can not be train by this image'
            });
        }
    });
}
function validateUrl(_0x2225d4) {
    const _0x39877d = _0x1883;
    var _0x36feb1 = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/\S*)?$/i;
    return _0x36feb1[_0x39877d(0x1f9)](_0x2225d4);
}
async function processUrlAndConvertToText(_0x374da1, _0x2dd492 = 0x4e20) {
    const _0x39640a = _0x1883;
    if (validateUrl(_0x374da1)) try {
        const _0x1bb0ac = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            },
            _0x160f6d = _0x27d4f6(_0x374da1, {
                'headers': _0x1bb0ac
            }),
            _0x3f5e97 = await Promise[_0x39640a(0x21e)]([_0x160f6d, new Promise((_0x51435f, _0xee9340) => setTimeout(() => _0xee9340(new Error(_0x39640a(0x184))), _0x2dd492))]);
        if (_0x3f5e97['ok']) {
            const _0x5b8dbc = await _0x3f5e97[_0x39640a(0x1bd)](),
                _0x23518f = convert(_0x5b8dbc);
            return {
                'success': !![],
                'text': _0x23518f
            };
        } else return {
            'msg': _0x39640a(0x179) + _0x3f5e97[_0x39640a(0x189)]
        };
    } catch (_0x140459) {
        return {
            'msg': _0x39640a(0x180) + _0x140459[_0x39640a(0x22b)]
        };
    } else return {
        'msg': 'Invalid URL'
    };
}
function readAndProcessConversations(_0xd42015) {
    return new Promise((_0x46fe65, _0x2c6cae) => {
        const _0x4c1fc9 = _0x1883;
        _0x509b28['readFile'](_0xd42015, _0x4c1fc9(0x1a6), (_0x3ab6e3, _0x4d05af) => {
            const _0x34e3b7 = _0x4c1fc9;
            if (_0x3ab6e3) return console[_0x34e3b7(0x192)]('Error reading file:', _0x3ab6e3[_0x34e3b7(0x22b)]), _0x2c6cae({
                'success': ![],
                'data': []
            });
            try {
                let _0x35df5c = JSON['parse'](_0x4d05af);
                if (!Array[_0x34e3b7(0x1f8)](_0x35df5c)) console[_0x34e3b7(0x192)](_0x34e3b7(0x197)), _0x509b28['writeFile'](_0xd42015, '[]', _0x34e3b7(0x1a6), _0x19a7a5 => {
                    const _0x4d49e8 = _0x34e3b7;
                    if (_0x19a7a5) return console[_0x4d49e8(0x192)]('Error writing file:', _0x19a7a5['message']), _0x2c6cae({
                        'success': ![],
                        'data': []
                    });
                    _0x46fe65({
                        'success': ![],
                        'data': []
                    });
                });
                else {
                    const _0x41ff58 = _0x35df5c[_0x34e3b7(0x191)](-0x14);
                    _0x509b28[_0x34e3b7(0x1c2)](_0xd42015, JSON['stringify'](_0x41ff58, null, 0x2), _0x34e3b7(0x1a6), _0x4c1adb => {
                        const _0x3c0db9 = _0x34e3b7;
                        if (_0x4c1adb) return console[_0x3c0db9(0x192)](_0x3c0db9(0x208), _0x4c1adb[_0x3c0db9(0x22b)]), _0x2c6cae({
                            'success': ![],
                            'data': []
                        });
                        _0x46fe65({
                            'success': !![],
                            'data': _0x41ff58
                        });
                    });
                }
            } catch (_0x23fc09) {
                console[_0x34e3b7(0x192)](_0x34e3b7(0x1ed), _0x23fc09['message']), _0x509b28[_0x34e3b7(0x1c2)](_0xd42015, '[]', 'utf8', _0x5ce8fd => {
                    const _0xc296aa = _0x34e3b7;
                    if (_0x5ce8fd) return console[_0xc296aa(0x192)](_0xc296aa(0x208), _0x5ce8fd[_0xc296aa(0x22b)]), _0x2c6cae({
                        'success': ![],
                        'data': []
                    });
                    _0x46fe65({
                        'success': ![],
                        'data': []
                    });
                });
            }
        });
    });
}
export {
    updatePlan,
    decreaseGptLimit,
    returnTokenTxt2Img,
    checkHamWizToken,
    returnImageText,
    openAitextWABot,
    pushObjectToArrayAndDeleteOld,
    readAndProcessConversations,
    createPathAndFileIfNotExists,
    checkDatabase,
    processUrlAndConvertToText,
    createJsonFile,
    returnTrain,
    createJsonFileEmbed,
    deleteFileIfExists,
    sendRecoveryEmail,
    rzCapturePayment,
    createOrder,
    openAiText,
    readJsonFile,
    createBlogPost,
    postToWordpress,
    getAllCategory,
    returnPost,
    checkWpAuth,
    getUserPlan,
    downloadImages,
    encodeObject,
    openAiImage,
    getWordCount,
    removeFileIfExists,
    daysDiff,
    doesFileExist,
    decodeObject
};
