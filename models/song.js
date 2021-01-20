
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
      type: DataTypes.STRING,
      allowNull: false
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false
    },
    chords: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lyrics: {
      type: DataTypes.STRING,
      allowNull: false
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
