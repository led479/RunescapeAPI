'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// const sumValues = obj => Object.values(obj).reduce((a, b) => a + b);


var CharSchema = new Schema({
    login: {
        type: String,
        unique: true,
        required: 'Digite o login'
    },
    stats: {
        overall: {
            level: {
                type: Number,
                default: 1
            },
            experience: {
                type: Number,
                default: 1
            }
        },
        attack: {
            level: {
                type: Number,
                default: 1
            },
            experience: {
                type: Number,
                default: 1
            }
        },
        strength: {
            level: {
                type: Number,
                default: 1
            },
            experience: {
                type: Number,
                default: 1
            }
        },
        defence: {
            level: {
                type: Number,
                default: 1
            },
            experience: {
                type: Number,
                default: 1
            }
        },
        ranged: {
            level: {
                type: Number,
                default: 1
            },
            experience: {
                type: Number,
                default: 1
            }
        },
        prayer: {
            level: {
                type: Number,
                default: 1
            },
            experience: {
                type: Number,
                default: 1
            }
        },
        magic: {
            level: {
                type: Number,
                default: 1
            },
            experience: {
                type: Number,
                default: 1
            }
        },
        runecrafting: {
            level: {
                type: Number,
                default: 1
            },
            experience: {
                type: Number,
                default: 1
            }
        },
        hitpoints: {
            level: {
                type: Number,
                default: 1
            },
            experience: {
                type: Number,
                default: 1
            }
        },
        crafting: {
            level: {
                type: Number,
                default: 1
            },
            experience: {
                type: Number,
                default: 1
            }
        },
        mining: {
            level: {
                type: Number,
                default: 1
            },
            experience: {
                type: Number,
                default: 1
            }
        },
        fishing: {
            level: {
                type: Number,
                default: 1
            },
            experience: {
                type: Number,
                default: 1
            }
        },
        cooking: {
            level: {
                type: Number,
                default: 1
            },
            experience: {
                type: Number,
                default: 1
            }
        },
        woodcutting: {
            level: {
                type: Number,
                default: 1
            },
            experience: {
                type: Number,
                default: 1
            }
        },
        firemaking: {
            level: {
                type: Number,
                default: 1
            },
            experience: {
                type: Number,
                default: 1
            }
        },
        agility: {
            level: {
                type: Number,
                default: 1
            },
            experience: {
                type: Number,
                default: 1
            }
        },
        herblore: {
            level: {
                type: Number,
                default: 1
            },
            experience: {
                type: Number,
                default: 1
            }
        },
        thieving: {
            level: {
                type: Number,
                default: 1
            },
            experience: {
                type: Number,
                default: 1
            }
        },
        fletching: {
            level: {
                type: Number,
                default: 1
            },
            experience: {
                type: Number,
                default: 1
            }
        },
        slayer: {
            level: {
                type: Number,
                default: 1
            },
            experience: {
                type: Number,
                default: 1
            }
        },
        farming: {
            level: {
                type: Number,
                default: 1
            },
            experience: {
                type: Number,
                default: 1
            }
        },
        construction: {
            level: {
                type: Number,
                default: 1
            },
            experience: {
                type: Number,
                default: 1
            }
        },
        hunter: {
            level: {
                type: Number,
                default: 1
            },
            experience: {
                type: Number,
                default: 1
            }
        }
    }
});
// CharSchema.methods.totalLvl = function () {
//     return sumValues(this.level);
// };

module.exports = mongoose.model('Chars', CharSchema);