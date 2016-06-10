module.exports = function(sequelize, DataTypes) {
	return sequelize.define('lugar', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nombre: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'lugar',
		timestamps: false
	});
}