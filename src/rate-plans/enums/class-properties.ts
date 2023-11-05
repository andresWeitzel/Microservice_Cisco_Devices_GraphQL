/* eslint-disable prettier/prettier */
/**
 * @description enum class. This enum returns the class property name, values, or length for validations
 */
export enum RatePlansProperties {
  //Decimal values
  DECIMAL_PRECISION_VALUE = 6,
  DECIMAL_SCALE_VALUE = 3,
  //id field
  NAME_VALUE_FOR_ID = 'id',
  MIN_LENGTH_VALUE_FOR_ID = 9999999999999,
  MAX_LENGTH_VALUE_FOR_ID = 200,
  //name field
  NAME_VALUE_FOR_NAME = 'name',
  MIN_LENGTH_VALUE_FOR_NAME = 4,
  MAX_LENGTH_VALUE_FOR_NAME = 200,
  //description field
  NAME_VALUE_FOR_DESCRIPTION = 'description',
  MIN_LENGTH_VALUE_FOR_DESCRIPTION = 4,
  MAX_LENGTH_VALUE_FOR_DESCRIPTION = 500,
  //version_id field
  NAME_VALUE_FOR_VERSION_ID = 'version_id',
  MIN_VALUE_FOR_VERSION_ID = 1,
  MAX_VALUE_FOR_VERSION_ID = 9999999999999,
  //version_plan field
  NAME_VALUE_FOR_VERSION_PLAN = 'version_plan',
  MIN_LENGTH_VALUE_FOR_VERSION_PLAN = 1,
  MAX_LENGTH_VALUE_FOR_VERSION_PLAN = 20,
  //status field
  NAME_VALUE_FOR_STATUS = 'status',
  //type_plan field
  NAME_VALUE_FOR_TYPE_PLAN = 'type_plan',
  MIN_LENGTH_VALUE_FOR_TYPE_PLAN = 2,
  MAX_LENGTH_VALUE_FOR_TYPE_PLAN = 200,
  //suscription_charge field
  NAME_VALUE_FOR_SUSCRIPTION_CHARGE = 'subscription_charge',
  DEFAULT_VALUE_FOR_SUSCRIPTION_CHARGE = 2.99,
  MIN_VALUE_FOR_SUSCRIPTION_CHARGE = 0.99,
  MAX_VALUE_FOR_SUSCRIPTION_CHARGE = 100.0,
  //number_of_tiers field
  NAME_VALUE_FOR_NUMBER_OF_TIERS = 'number_of_tiers',
  MIN_VALUE_FOR_NUMBER_OF_TIERS = 1,
  MAX_VALUE_FOR_NUMBER_OF_TIERS = 10,
  //creation_date field
  NAME_VALUE_FOR_CREATION_DATE = 'creation_date',
  //update_date field
  NAME_VALUE_FOR_UPDATE_DATE = 'update_date',
  //for dates
  MIN_VALUE_FOR_CREATION_UPDATE_DATE = 10,
  MAX_VALUE_FOR_CREATION_UPDATE_DATE = 40,
}
