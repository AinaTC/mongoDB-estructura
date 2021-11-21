db.createCollection('user', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'user',
        properties: {
          email: {
            bsonType: 'string'
          },
          sexe: {
            bsonType: 'string'
          },
          password: {
            bsonType: 'string'
          },
          usename: {
            bsonType: 'string'
          },
          pais: {
            bsonType: 'string'
          },
          codi_postal: {
            bsonType: 'string'
          },
          data_naixement: {
            bsonType: 'date'
          },
          canal: {
            bsonType: 'object',
            title: 'canal',
            required: ['id_canal'],
            properties: {
              id_canal: {
                bsonType: 'objectId'
              },
              nom: {
                bsonType: 'string'
              },
              descripcio: {
                bsonType: 'string'
              },
              data_creacio: {
                bsonType: 'date'
              }
            }
          },
          subscripcions: {
            bsonType: 'array',
            items: {
              bsonType: 'objectId'
            }
          }
        },
          playlists: {
            bsonType: 'array',
            items: {
              title: 'playlist',
              properties: {
                id: {
                  bsonType: 'objectId'
                },
                data_creacio: {
                  bsonType: 'date'
                },
                nom: {
                  bsonType: 'string'
                },
                estat: {
                  enum:['publica','privada']
                }  
            }}
          }
      
      }
    },
    autoIndexId: true
  });
  db.createCollection('video', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'video',
        required: ['user'],
        properties: {
          nom: {
            bsonType: 'string'
          },
          nom_arxiu: {
            bsonType: 'string'
          },
          descripcio: {
            bsonType: 'string'
          },
          thumbnail: {
            bsonType: 'string'
          },
          mida: {
            bsonType: ['double','int']
          },
          durada: {
            bsonType: 'decimal'
          },
          estat: {
            enum:['public','privat', 'ocult']
          },
          data_hora_creacio: {
            bsonType: 'date'
          },
          user: {
            bsonType: 'objectId'
          },
          comentaris: {
            bsonType: 'array',
            items: {
              title: 'comentari',
              required: ['comentari_id', 'user'],
              properties: {
                comentari_id: {
                  bsonType: 'objectId'
                },
                data_hora: {
                  bsonType: 'date'
                },
                text: {
                  bsonType: 'string'
                },
                like_dislike: {
                  bsonType: 'array',
                  items: {
                    title: 'likes',
                    required: ['user'],
                    properties: {
                      dia_hora: {
                        bsonType: 'date'
                      },
                      EsLike: {
                        bsonType: 'bool'
                      },
                      user: {
                        bsonType: 'objectId'
                      }
                    }
                  }
                },
                num_likes: {
                  bsonType: 'int'
                },
                num_dislikes: {
                  bsonType: 'int'
                },
                user: {
                  bsonType: 'objectId'
                }
              }
            }
          },
          like_dislikes: {
            bsonType: 'array',
            items: {
              title: 'likes',
              required: ['user'],
              properties: {
                dia_hora: {
                  bsonType: 'date'
                },
                EsLike: {
                  bsonType: 'bool'
                },
                user: {
                  bsonType: 'objectId'
                }
              }
            }
          },
          num_likes: {
            bsonType: 'int'
          },
          num_dislikes: {
            bsonType: 'int'
          },
          num_reproduccions: {
            bsonType: 'int'
          },
          etiquetes: {
            bsonType: 'array',
            items: {
              title: 'etiqueta',
              required: ['id'],
              properties: {
                id: {
                  bsonType: 'objectId'
                },
                nom: {
                  bsonType: 'string'
                }
              }
            }
          }
        }
      }
    },
    autoIndexId: true
  });
  