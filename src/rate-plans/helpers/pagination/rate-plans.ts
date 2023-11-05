//Const-vars
let msgResponse: string;
let msgLog: string;

/**
 * @description checks the order by value of the query string param to assign a field value
 * @param {String} orderBy String type
 * @returns a string with the field value or null
 */
export const checkOrderBy = async (orderBy: string) => {
  try {
    msgResponse = null;
    msgLog = null;

    switch (orderBy.toLowerCase()) {
      case 'id':
        orderBy = 'id';
        break;
      case 'nombre':
      case 'name':
        orderBy = 'name';
        break;
      case 'descripcion':
      case 'description':
        orderBy = 'description';
        break;
      case 'version_id':
      case 'versionid':
        orderBy = 'version_id';
        break;
      case 'version_plan':
      case 'versionplan':
        orderBy = 'version_plan';
        break;
      case 'status':
        orderBy = 'status';
        break;
      case 'type_plan':
      case 'typeplan':
        orderBy = 'type_plan';
        break;
      case 'subscription_charge':
      case 'subscriptioncharge':
        orderBy = 'subscription_charge';
        break;
      case 'number_of_tiers':
      case 'numberoftiers':
        orderBy = 'number_of_tiers';
        break;
      case 'creation_date':
      case 'creationdate':
        orderBy = 'creation_date';
        break;
      case 'update_date':
      case 'updatedate':
        orderBy = 'update_date';
        break;
      default:
        orderBy = null;
    }
    console.log(orderBy);
    return orderBy;
  } catch (error) {
    msgResponse = 'ERROR in checkOrderBy() helper function.';
    msgLog = msgResponse + `Caused by ${error}`;
    console.log(msgLog);
    return null;
  }
};

/**
 * @description checks the order at value of the query string param to assign a field value
 * @param {String} orderAt String type
 * @returns a string with the field value or null
 */
export const checkOrderAt = async (orderAt: string) => {
  try {
    msgResponse = null;
    msgLog = null;

    switch (orderAt.toLowerCase()) {
      case 'asc':
        orderAt = 'ASC';
        break;
      case 'desc':
        orderAt = 'DESC';
        break;
      default:
        orderAt = null;
    }
    return orderAt;
  } catch (error) {
    msgResponse = 'ERROR in checkOrderAt() helper function.';
    msgLog = msgResponse + `Caused by ${error}`;
    console.log(msgLog);
    return null;
  }
};
