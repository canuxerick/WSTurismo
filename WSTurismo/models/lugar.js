module.exports = function(sequelize, DataTypes) {
	return sequelize.define('lugar', {
		id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nombre: {
			type: DataTypes.STRING,
			allowNull: true
		},
		direccion: {
			type: DataTypes.STRING,
			allowNull: true
		},
		region: {
			type: DataTypes.INTEGER(10),
			allowNull: false
		},
		tipo: {
			type: DataTypes.INTEGER(10),
			allowNull: false
		}
	}, {
		tableName: 'lugar',
		timestamps: false
	});
}