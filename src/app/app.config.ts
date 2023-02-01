
export const CREDENTIALS = {
  username: 'SMP-EMP0049',
  password: '123456'
};

export const CONSTANT = {
  customerRegister_API: '/customerRegister',
  UPDATE_PASSWORD_API: '/updatePassword',
  SMS_API: '/sendSMS',
  USER_PROFILE_UPDATE_API: '/updateUser',
  GET_TARRIF: '/getTarrif',
  INSERT_OR_UPDATE_BOOKING: '/insertOrUpdateBooking',
  DUMMY_USER_LOGIN: '/api/UserEos/login?include=user',
  LOGIN_URL: '/api/customerEos/login?include=user',
  CUSTOMER_URL: '/api/Customers',
  USEREOS_URL: '/api/customerEos',
  MERCHANT_URL: '/api/Merchants',
  GET_BOOKING_DETAILS_URL: '/api/BookingOndemandDetails',
  GET_BOOKING_DETAILS_CUSTOMER_ID_URL: '/getBookingDetailsByCustomerId',
  GET_CUSTOMER_ADDRESS_URL: '/api/CustomerAddresses',
  GET_TARIFF_URL: '/api/Tariffs',
  GET_CITY_ID: '/api/Cities',
  GET_CANCEL_BOOKING_DETAILS: '/api/BookingOndemandLabourMappings',
  GET_CANCEL_REASONS: '/api/Reasons',
  CANCEL_ONDEMAND_BOOKING: '/cancelBooking',
  CANCEL_PERMANENT_BOOKING: '/cancelPermanentBooking',
  INSERT_OR_UPDATE_PERMANENT_BOOKING: '/insertOrUpdatePermanentBooking',
  GET_PERMANENT_BOOKING_DETAILS_URL: '/getPermanentBookingDetails',
  GET_PERMANENT_BOOKING_URL : '/api/BookingPlacementDetails',
  GET_ENUM: '/api/Enums',
  GET_ASSET_URL: '/api/Assets',
  BOOKING_SOURCE: '/api/BookingSources',
  MERCHANT_PARTNER_DETAILS: '/api/MerchantPartnerDetails',
  CUSTOMER_FEEDBACK_URL: '/api/CustomerFeedbacks',
  INSERT_ONDEMAND_FEEDBACK: '/insertorUpdateRatingODBandPB',
  BOOKING_PERMANENT_LABOURMAPPING: '/api/BookingPlacementLabourMappings',
  ALL_SERVING_CITIES: '/api/Cities',
  UPDATE_CUSTOMER_ADDRESS: '/updateCustomerAddress',
  ADD_NEW_ADDRESS: '/addNewAddress',
  DELETE_CUSTOMER_ADDRESS: '/deleteCustomerAddress',
  INSERT_CUSTOMER_BUG: '/insertCustomerbug',
  INSERT_CUSTOMER_SUGGESTION: '/insertCustomersuggestion',
  USER_IS_LOGGED_UPDATE_API:'/updateUserIsLogged'
};

export const RESOURCE = {
  /** TARIFF  */
  FOURHOURS: 4,
  EIGHTHOURS: 8,
  TWELVEHOURS: 12,
  FIVEHOURS: 5,
  IN_CITY: 'IN_CITY',
  OUTSTATION: 'OUTSTATION',
  
  ONE_WAY_TRIP: 'ONEWAYTRIP',
  ROUND_TRIP: 'ROUNDTRIP',

  ONE_WAY_DROP: 'ONEWAYTRIPDROP',
  STAY: 'STAY',

  FULL_DAY_COMMISSION: 'FULLCMSN',
  HALF_DAY_COMMISSION: 'HALFCMSN',
  SINGLE_TRIP_COMMISSION: 'SINGLECMSN',
  DROP_LOCATION_CHARGES: 50,
  MORNING_CHARGES: 100,
  OBD_REASON_CATEGORY: 'ODBCancelCustomer',
  PERMANENT_BOOKING_REASON_CATEGORY: 'Labour Reject',
  BVID_PERMANENT: 1,  // Business Vertical Id
  BVID_ONDEMAND: 2,   // Business Vertical Id

  /** TRAVEL TYPE ID */
  ONE_WAY_DROP_ID: '31',
  ROUND_TRIP_ID: '32',
  STAY_ID: '33',

  /** DUTY HOURS */
  FOUR_HOURS_ID: '34',
  EIGHT_HOURS_ID: '35',
  TWELVE_HOURS_ID: '36',
  FIVE_HOURS_ID: '39',

  /** DUTY TYPE ID */
  IN_CITY_ID : '37',
  OUTSTATION_ID: '38',

  /** SERVICE SUBCATEGORY ID */
  AUTOMATIC_ID: '1',
  MANUAL_ID: '2',
  LUXURY_ID: '6',

  /** ASSET ID */
  A_HATCHBACK_ID: '284',
  A_SEDAN_ID: '285',
  A_SUV_ID: '286',
  M_HATCHBACK_ID: '287',
  M_SEDAN_ID: '288',
  M_SUV_ID: '289',
  L_HATCHBACK_ID: '290',
  L_SEDAN_ID: '291',
  L_SUV_ID: '292',

  /** REWARD POINTS */
  REWARDPOINTS_PERBOOKING: 4,
  RUPEES_PER_REWARD: 5,

 
  BOOKING_STATUS: {
    LEAD: 23,
    ONPROCESS: 13,
    CONFIRM: 16,
    COMPLETE: 17,
    CANCELLED: 9,
    INQUIRY: 18
  },

  /** CHARGES */
  DRIVE_KMS_PERDAY: 600,
  LUXURY_CAR_CHARGE: 100,
  LESS_THAN_OR_EQUAL_TO_HUNDRED_KM_FARE: 1200,
  LESS_THAN_OR_EQUAL_TO_HUNDRED_AND_FIFTY_KM_FARE: 1300,
  FARE_PER_KM: 6,
  FOOD_CHARGE: 250,
  ACCOMODATION_CHARGE: 250,


};

export const SESSION = {
  SESSION_TOKEN_ID: 'access_token_key',
  SESSION_USER_ID: 'user_id_key',
  SESSION_USERNAME: 'mobileNo',
  SESSION_BUSINESS_VERTICAL_ID: 'Business_vertical_id',
  SESSION_NAME: 'name',
  SESSION_REGISTERED_PHONE_NUMBER: 'Registered_phone_number',
  SESSION_MERCHANT_ID: 'merchant_id',
  SESSION_MERCHANT_NAME: 'merchant_name',
  SESSION_CUSTOMER_ID: 'customer_id'
};

export const secretKey = {
  SECRET_KEY: 'Rbi#J@nk@ly@n@$ec2018',
};

export const userId = {
  Id: 254,
};

