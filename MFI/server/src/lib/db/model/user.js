const {DataTypes, Sequelize} = require('sequelize');

const create = async (sequelize) => {
    const userTable = await sequelize.define('user', {
        // Model attributes are defined here
        userIdx: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        id: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        pw: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.INTEGER
        },
        email: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        nickname: {
            type: DataTypes.STRING
        },
    }, {
        // Other model options go here   timestamps: false,
        freezeTableName: true,
        timestamps: false,
    });

    userTable.associate = function (models) {
        userTable.hasMany(models.board, 
            {foreignKey: 'userIdx',
        });
    };

    return userTable;
}
module.exports = create;  