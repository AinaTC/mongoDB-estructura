db.createCollection('usuari', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'usuari',
        properties: {
          email: {
            bsonType: 'string'
          },
          password: {
            bsonType: 'string'
          },
          username: {
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
          tipus: {
            enum:['free','premium']
          },
          subscripcions: {
            bsonType: 'array',
            items: {
              title: 'subscripcio',
              properties: {
                data_inici: {
                  bsonType: 'date'
                },
                data_renovacio: {
                  bsonType: 'date'
                },
                forma_pagament: {
                  bsonType: 'object',
                  title: 'pagament',
                  properties: {
                    forma: {
                      bsonType: 'string'
                    },
                    num_targeta: {
                      bsonType: 'string'
                    },
                    csv: {
                      bsonType: 'string'
                    },
                    mes_any_caducitat: {
                      bsonType: 'string'
                    },
                    nom_usuari_paypal: {
                      bsonType: 'string'
                    }
                  }
                },
                pagaments: {
                  bsonType: 'array',
                  items: {
                    title: 'pagament',
                    properties: {
                      num_ordre: {
                        bsonType: 'int'
                      },
                      data: {
                        bsonType: 'date'
                      },
                      total: {
                        bsonType: 'double'
                      }
                    }
                  }
                }
              }
            }
          },
          cançons_preferides: {
            bsonType: 'array',
            items: {
              title: 'cancço_preferida',
              required: ['id_canço', 'artista'],
              properties: {
                id_canço: {
                  bsonType: 'objectId'
                },
                titol: {
                  bsonType: 'string'
                },
                artista: {
                  bsonType: 'objectId'
                }
              }
            }
          },
          albums_preferits: {
            bsonType: 'array',
            items: {
              title: 'album_preferit',
              required: ['id_album', 'artista'],
              properties: {
                id_album: {
                  bsonType: 'objectId'
                },
                titol: {
                  bsonType: 'string'
                },
                artista: {
                  bsonType: 'objectId'
                }
              }
            }
          },
          playlists: {
            bsonType: 'array',
            items: {
              title: 'playlist',
              required: ['id_playlist'],
              properties: {
                id_playlist: {
                  bsonType: 'objectId'
                },
                titol: {
                  bsonType: 'string'
                },
                data_creacio: {
                  bsonType: 'date'
                },
                data_eliminacio: {
                  bsonType: 'date'
                },
                esEliminada: {
                  bsonType: 'bool'
                },
                num_cançons: {
                  bsonType: 'int'
                },
                cançons: {
                  bsonType: 'array',
                  items: {
                    title: 'canço_afegida',
                    properties: {
                      titol: {
                        bsonType: 'string'
                      },
                      artista: {
                        bsonType: 'objectId'
                      },
                      usuari_que_afageix_canço: {
                        bsonType: 'objectId'
                      },
                      id_canço: {
                        bsonType: 'objectId'
                      }
                    }
                  }
                }
              }
            }
          },
          artistes_que_segueix: {
            bsonType: 'array',
            items: {
              title: 'artistes_que_segueix',
              required: ['artista'],
              properties: {
                nom: {
                  bsonType: 'string'
                },
                artista: {
                  bsonType: 'objectId'
                }
              }
            }
          }
        }
      }
    },
    autoIndexId: true
  });
  db.createCollection('artista', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'artista',
        properties: {
          nom: {
            bsonType: 'string'
          },
          img: {
            bsonType: 'string'
          },
          artistes_relacionats: {
            bsonType: 'array',
            items: {
              bsonType: 'objectId'
            }
          },
          albums: {
            bsonType: 'array',
            items: {
              title: 'album',
              required: ['id_album'],
              properties: {
                id_album: {
                  bsonType: 'objectId'
                },
                titol: {
                  bsonType: 'string'
                },
                img: {
                  bsonType: 'string'
                },
                any_publicacio: {
                  bsonType: 'date'
                },
                cançons: {
                  bsonType: 'array',
                  items: {
                    title: 'cancço',
                    required: ['id_canço'],
                    properties: {
                      id_canço: {
                        bsonType: 'objectId'
                      },
                      titol: {
                        bsonType: 'string'
                      },
                      durada: {
                        bsonType: ['decimal','double','string']
                      },
                      num_reproduccions: {
                        bsonType: 'int'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    autoIndexId: true
  });
  