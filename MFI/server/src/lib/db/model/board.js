const {DataTypes, Sequelize} = require('sequelize');

const create = async (sequelize) => {
    const userTable = await sequelize.define('test', {
        // Model attributes are defined here
        boardIdx: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        userIdx: {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
        title: {
            type: DataTypes.STRING
        },
        content: {
            type: DataTypes.STRING
        },
        created: {
            type: DataTypes.INTEGER
        },
        age: {
            type: DataTypes.INTEGER
        },
    }, {
        // Other model options go here   timestamps: false,
        freezeTableName: true,
        timestamps: false,
    });

    userTable.associate = function (models) {
        // userTable.hasMany(models.idea, 
        //     {foreignKey: 'userIdx',
        // });
    };

    return userTable;
}
module.exports = create;  