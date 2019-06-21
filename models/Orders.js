module.exports = (sequelize, DataTypes) => {
    let orders = sequelize.define("orders", {
        unique_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        fullfillment_date: {
            type: DataTypes.DATE,
        },
        order_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        order_type: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        delivery_date: {
            type: DataTypes.DATE
        },
        order_status: {
            type: DataTypes.STRING(20),
            allowNull: false
        }
    });
    return orders;
}