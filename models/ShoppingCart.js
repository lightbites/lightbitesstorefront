module.exports = (sequelize, DataTypes) => {
    let shoppingCart = sequelize.define('shopping_card', {
        unique_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fulfillment_date: {
            type: DataTypes.DATE
        },
        meal_id: {
            type: DataTypes.INTEGER
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            types: DataTypes.DECIMAL(13,2),
            allowNull: false
        }
    });
    return shoppingCart;
}