db.createCollection('ullera', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Ullera',
        properties: {
          graduació: {
            bsonType: 'array',
            items: {bsonType:['double','int','decimal']}
          },
          preu: {
            bsonType: ['decimal','int','double','string']
          },
          marca: {
            bsonType: 'string'
          },
          tipus_montura: {
            enum:['flotant','metàl·lica','pasta']
          },
          color: {
            bsonType: 'array',
            items: {bsonType:'string'}
          },
          data_venta: {
            bsonType: 'date'
          },
          proveidor: {
            bsonType: 'object',
            title: 'proveidor',
            required: ['proveidor'],
            properties: {
              nom: {
                bsonType: 'string'
              },
              telefon: {
                bsonType: 'string'
              },
              fax: {
                bsonType: 'string'
              },
              proveidor: {
                bsonType: 'objectId'
              }
            }
          },
          treballador: {
            bsonType: 'object',
            title: 'treballador',
            required: ['treballador_id'],
            properties: {
              treballador_id: {
                bsonType: 'objectId'
              },
              nom: {
                bsonType: 'string'
              }
            }
          },
          client: {
            bsonType: 'object',
            title: 'client',
            required: ['client'],
            properties: {
              client: {
                bsonType: 'objectId'
              },
              telefon: {
                bsonType: 'string'
              },
              nom: {
                bsonType: 'string'
              },
              email: {
                bsonType: 'string'
              }
            }
          }
        }
      }
    },
    autoIndexId: true
  });
  db.createCollection('client', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'client',
        properties: {
          nom: {
            bsonType: 'string'
          },
          telefon: {
            bsonType: 'string'
          },
          email: {
            bsonType: 'string'
          },
          data_registre: {
            bsonType: 'date'
          },
          client_que_ha_recomanat: {
            bsonType: 'object',
            title: 'client',
            required: ['client'],
            properties: {
              client: {
                bsonType: 'objectId'
              },
              telefon: {
                bsonType: 'string'
              },
              nom: {
                bsonType: 'string'
              },
              email: {
                bsonType: 'string'
              }
            }
          }
        }
      }
    },
    autoIndexId: true
  });
  db.createCollection('proveidor', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'proveidor',
        properties: {
          nom: {
            bsonType: 'string'
          },
          telefon: {
            bsonType: 'string'
          },
          fax: {
            bsonType: 'string'
          },
          NIF: {
            bsonType: 'string'
          },
          marques: {
            bsonType: 'array',
            items: {bsonType:'string'}
          },
          adreça: {
            bsonType: 'object',
            title: 'adreça',
            properties: {
              carrer: {
                bsonType: 'string'
              },
              numero: {
                bsonType: ['int','string']
              },
              pis: {
                bsonType: ['int','string']
              },
              porta: {
                bsonType: ['int','string']
              },
              ciutat: {
                bsonType: 'string'
              },
              codi_postal: {
                bsonType: ['string','null']
              },
              pais: {
                bsonType: 'string'
              }
            }
          }
        }
      }
    },
    autoIndexId: true
  });
  
  
  /* Reference 'client_client' */
  
  
  /* Reference 'client_client_que_ha_recomanat' */
  
  
  /* Reference 'proveidor_proveidor' */
  