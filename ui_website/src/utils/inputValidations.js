

export const apartment_name_validation = {
  name: 'apartment_name',
  label: 'apartment_name',
  type: 'text',
  id: 'apartment_name',
  placeholder: 'write your apartment_name ',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}
export const property = {
  name: 'property',
  label: 'property',
  type: 'text',
  id: 'property',
  placeholder: 'write your property ',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}

export const address_validation = {
  name: 'address',
  label: 'address',
  type: 'text',
  id: 'address',
  placeholder: 'write your address ',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 500,
      message: '500 characters max',
    },
  },
}


export const desc_validation = {
  name: 'description',
  label: 'description',
  multiline: true,
  id: 'description',
  placeholder: 'write description ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 200,
      message: '200 characters max',
    },
  },
}

export const password_validation = {
  name: 'password',
  label: 'password',
  type: 'password',
  id: 'password',
  placeholder: 'type password ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    minLength: {
      value: 6,
      message: 'min 6 characters',
    },
  },
}

export const num_validation = {
  name: 'num',
  label: 'number',
  type: 'number',
  id: 'num',
  placeholder: 'write a random number',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}
export const size_validation = {
  name: 'size',
  label: 'size',
  type: 'number',
  id: 'size',
  placeholder: 'write a size apartment',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    min:{
      value:0,
      message: 'Area must be greater than or equal to 0'
    }
  },
}
export const area_validation = {
  name: 'area',
  label: 'area(m2)',
  type: 'number',
  id: 'size',
  placeholder: 'write a area apartment',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    min:{
      value: 0,
      message: 'Area must be greater than or equal to 0'
    }
    
  },
}
export const phone_validation_1 = {
  name: 'phone_number1',
  label: 'phone_number1',
  type: 'text',
  id: 'phone_number1',
  placeholder: 'write the phone number 1',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    pattern: {
      value:
      /^[0-9]{10}$/,
      message: 'not valid',
    },
  },
}
export const phone_validation_2 = {
  name: 'phone_number2',
  label: 'phone_number2',
  type: 'text',
  id: 'phone_number2',
  placeholder: 'write the phone number 2',
  validation: {
    required: {
      value: false,
      message: 'required',
    },
    pattern: {
      value:
      /^[0-9]{10}$/,
      message: 'not valid',
    },
  },
}

export const email_validation = {
  name: 'email',
  label: 'email address',
  type: 'email',
  id: 'email',
  placeholder: 'write a random email address',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'not valid',
    },
  },
}
export const fileImg_validation = {
  name: 'imgUrl',
  label: 'imgUrl',
  type: 'file',
  id: 'imgUrl',
  placeholder: 'write the imgUrl ',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
  
}

export const imgUrl = {
  name: 'imgUrl',
  label: 'imgUrl',
  type: 'text',
  id: 'imgUrl',
  placeholder: 'write your imgUrl ',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
   
  },
}



export const price_of_electricity_validation = {
  name: 'price_of_electricity',
  label: 'price_of_electricity',
  type: 'number',
  id: 'size',
  placeholder: 'write a price_of_electricity',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    min:{
      value:0,
      message: 'price_of_electricity must be greater than or equal to 0'
    }
  },
}
export const price_of_internet_validation = {
  name: 'price_of_internet',
  label: 'price_of_internet',
  type: 'number',
  id: 'size',
  placeholder: 'write a price_of_internet',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    min:{
      value:0,
      message: 'price_of_internet must be greater than or equal to 0'
    }
  },
}
export const price_of_trash_validation = {
  name: 'price_of_trash',
  label: 'price_of_trash',
  type: 'number',
  id: 'size',
  placeholder: 'write a price_of_trash',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    min:{
      value:0,
      message: 'price_of_trash must be greater than or equal to 0'
    }
  },
}

export const price_of_water_validation = {
  name: 'price_of_water',
  label: 'price_of_water',
  type: 'number',
  id: 'size',
  placeholder: 'write a price_of_water',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    min:{
      value:0,
      message: 'price_of_water must be greater than or equal to 0'
    }
  },
}

export const water_bill_validation = {
  name: 'water_bill',
  label: 'water_bill',
  type: 'number',
  id: 'size',
  placeholder: 'write a water_bill',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    min:{
      value:0,
      message: 'water_bill must be greater than or equal to 0'
    }
  },
}

export const roomName_validation = {
  name: 'roomName',
  label: 'roomName',
  type: 'text',
  id: 'roomName',
  placeholder: 'write your roomName ',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}
export const sizeRoom_validation = {
  name: 'sizeRoom',
  label: 'sizeRoom',
  type: 'number',
  id: 'roomName',
  placeholder: 'write your roomName ',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
    min: {
      value: 0,
      message : 'must be greather or equal than 0'
    }
  },
}
export const typeRoom_validation = {
  name: 'typeRoom',
  label: 'typeRoom',
  type: 'text',
  id: 'typeRoom',
  placeholder: 'write your typeRoom ',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}
export const priceRoom_validation = {
  name: 'priceRoom',
  label: 'priceRoom',
  type: 'number',
  id: 'priceRoom',
  placeholder: 'write your priceRoom ',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
    min: {
      value: 0,
      message: "must be greater or equal than 0 "
    }
  },
}
export const descriptionRoom_validation = {
  name: 'descriptionRoom',
  label: 'descriptionRoom',
  type: 'text',
  id: 'descriptionRoom',
  placeholder: 'write your descriptionRoom ',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 500,
      message: '500 characters max',
    },
    min: {
      value: 0,
      message: "must be greater or equal than 0 "
    }
  },
}
export const amount_validation = {
  name: 'amount',
  label: 'amount',
  type: 'number',
  id: 'amount',
  placeholder: 'write your amount ',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
    min: {
      value: 0,
      message: "must be greater or equal than 0 "
    }
  },
}

export const fileImgsRoom_validation = {
  name: 'fileImgsRoom',
  label: 'fileImgsRoom',
  type: 'file',
  id: 'fileImgsRoom',
  placeholder: 'write the fileImgsRoom ',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
  
  
}