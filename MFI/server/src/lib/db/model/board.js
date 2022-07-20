const {DataTypes, Sequelize} = require('sequelize');

const create = async (sequelize) => {
    const boardTable = await sequelize.define('board', {
        // Model attributes are defined here
        boardIdx: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        userIdx: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'userIdx',
            }
        },
        title: {
            type: DataTypes.STRING
        },
        content: {
            type: DataTypes.STRING
        },
        created: {
            type: DataTypes.DATE,
            defalutValue: sequelize.literal('now()')
        },
    }, {
        // Other model options go here   timestamps: false,
        freezeTableName: true,
        timestamps: false,
    });

    boardTable.associate = function (models) {
        boardTable.belongsTo(models.user, 
            {foreignKey: 'userIdx',
        });
    };

    return boardTable;
}
module.exports = create;  