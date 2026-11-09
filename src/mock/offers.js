const MOCK_OFFERS = [
  {
    type: 'taxi',
    offers: [
      {
        id: '4e88629d-c2ac-47f3-a55c-844debede9e6',
        title: 'Upgrade to a business class',
        price: 185
      },
      {
        id: '50b3faaf-7aad-4c57-9a5b-22b198e00503',
        title: 'Choose the radio station',
        price: 64
      },
      {
        id: '33733732-ab04-4db3-905b-edbcbadae9bc',
        title: 'Choose temperature',
        price: 62
      },
      {
        id: 'aa2297ff-ece8-4ee3-b91f-34fcc058862b',
        title: 'Drive quickly, I\'m in a hurry',
        price: 140
      },
      {
        id: '2a9aa04d-1cb4-438d-9f1c-e0aa861fdac7',
        title: 'Drive slowly',
        price: 147
      }
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        id: '0945eaff-649d-479e-9c19-e01d63752250',
        title: 'Infotainment system',
        price: 182
      },
      {
        id: '301d4fab-5c37-41ba-832d-45658d5d8dd8',
        title: 'Order meal',
        price: 64
      },
      {
        id: '55b0dd06-6c90-4d6b-bd87-ec86df7aa1ce',
        title: 'Choose seats',
        price: 34
      }
    ]
  },
  {
    type: 'train',
    offers: [
      {
        id: '60b37cfb-df7b-4ee2-a741-d5ad9dd53827',
        title: 'Book a taxi at the arrival point',
        price: 196
      },
      {
        id: '49ca6217-9577-4509-9833-483c9a0cde38',
        title: 'Order a breakfast',
        price: 85
      },
      {
        id: 'f352b2eb-9ded-4502-8320-82f55485163c',
        title: 'Wake up at a certain time',
        price: 183
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: '53130589-8d8e-47db-ad3d-625d46129d27',
        title: 'Choose meal',
        price: 172
      },
      {
        id: '4ff4de98-0f42-4034-88f3-13d6254b93ec',
        title: 'Choose seats',
        price: 101
      },
      {
        id: '761afedd-d406-4917-a849-b9d741b7e1d5',
        title: 'Upgrade to comfort class',
        price: 135
      },
      {
        id: '57464e24-27dd-46e0-91f1-6d696e640283',
        title: 'Upgrade to business class',
        price: 169
      },
      {
        id: 'b219c627-829c-4b55-9f1f-425a2283677b',
        title: 'Add luggage',
        price: 107
      },
      {
        id: 'c6b09dc6-284e-47ee-96ee-691be8960c22',
        title: 'Business lounge',
        price: 119
      }
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        id: '8d9ce7b5-ad46-4f1a-90aa-618b01c15392',
        title: 'Choose the time of check-in',
        price: 186
      },
      {
        id: 'cfee2f1a-d78a-4883-8649-8f71228f4a06',
        title: 'Choose the time of check-out',
        price: 106
      },
      {
        id: '4b5c2c70-e977-4cd5-b00a-4568087ade53',
        title: 'Add breakfast',
        price: 112
      },
      {
        id: 'ed05fbf6-638e-4152-9f07-34a86dbe082e',
        title: 'Laundry',
        price: 137
      },
      {
        id: '8344b8f7-af9d-48bc-87ff-275c7c153e40',
        title: 'Order a meal from the restaurant',
        price: 150
      }
    ]
  },
  {
    type: 'sightseeing',
    offers: []
  },
  {
    type: 'ship',
    offers: [
      {
        id: '8fc488bb-c747-4ab7-83f0-8a6fccd30746',
        title: 'Choose meal',
        price: 112
      },
      {
        id: '1ad63188-edcf-4ac3-8f19-4fc1747fbd47',
        title: 'Choose seats',
        price: 142
      },
      {
        id: '66bba190-b71d-4465-beb5-bb95bc4966c5',
        title: 'Upgrade to comfort class',
        price: 91
      },
      {
        id: '5567879d-6773-42ea-becf-f51363da9d01',
        title: 'Upgrade to business class',
        price: 78
      },
      {
        id: '48b2e704-8819-4e40-b066-ee3702a84d70',
        title: 'Add luggage',
        price: 72
      },
      {
        id: 'db905278-2204-4521-acf0-b521063b058f',
        title: 'Business lounge',
        price: 105
      }
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        id: '9d17d9df-45e9-4d99-971c-5f25fee4fbe1',
        title: 'With automatic transmission',
        price: 150
      },
      {
        id: 'db9be52f-5649-4fde-8a6c-1d24fec50043',
        title: 'With air conditioning',
        price: 70
      }
    ]
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: 'a077c526-38f1-452c-ae9a-fa33724e86b4',
        title: 'Choose live music',
        price: 82
      },
      {
        id: 'c1f8fce3-1d40-4d43-86f9-4b2a7d36cc19',
        title: 'Choose VIP area',
        price: 43
      }
    ]
  }
];

export {MOCK_OFFERS};
