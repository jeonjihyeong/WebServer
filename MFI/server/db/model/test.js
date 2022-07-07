const {DataTypes, Sequelize} = require('sequelize');

const create = async (sequelize) => {
    const userTable = await sequelize.define('test', {
        // Model attributes are defined here
        testIdx: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
            // allowNull defaults to true
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