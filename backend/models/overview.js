module.exports = (sequelize, DataTypes) => {
    return sequelize.define('overview', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        userId: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING(30),
        },
        overView: {
            allowNull: false,
            type: DataTypes.STRING(150),
        },
    });
};
