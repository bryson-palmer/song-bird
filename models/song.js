
// Creating song model
module.exports = function(sequelize, DataTypes) {
  const Song = sequelize.define("Song", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tempo: {
      type: DataTypes.INTEGER,
      max: 200,
      min: 60, 
      isNumeric: true
    },
    key: {
      type: DataTypes.STRING,
      isNumeric: false
    },
    chords: {
      type: DataTypes.STRING,
    },
    lyrics: {
      type: DataTypes.TEXT,
    }
  });
  // 
  Song.associate = function(models) {
    Song.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  }
  return Song;
};
