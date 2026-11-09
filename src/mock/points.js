const MOCK_POINTS = [
  {
    id: '18cf4f80-3d10-4c2e-9d97-65864c8db8ea',
    basePrice: 2758,
    dateFrom: '2026-10-29T00:57:04.981Z',
    dateTo: '2026-10-30T10:34:04.981Z',
    destination: '6eaea577-4f88-42f7-b1cf-8c026673a757',
    isFavorite: true,
    offers: [
      'db9be52f-5649-4fde-8a6c-1d24fec50043'
    ],
    type: 'drive'
  },
  {
    id: '98962703-92d2-4d03-814e-549e225ebcaa',
    basePrice: 5144,
    dateFrom: '2026-11-01T00:59:04.981Z',
    dateTo: '2026-11-02T19:53:04.981Z',
    destination: '6eaea577-4f88-42f7-b1cf-8c026673a757',
    isFavorite: true,
    offers: [],
    type: 'restaurant'
  },
  {
    id: '3df5bb12-c47d-4dcf-9b6f-76f5c7f2b7c1',
    basePrice: 3551,
    dateFrom: '2026-11-03T10:37:04.981Z',
    dateTo: '2026-11-04T16:42:04.981Z',
    destination: '093fa630-bce9-40e5-9154-1066b594078a',
    isFavorite: false,
    offers: [],
    type: 'drive'
  },
  {
    id: '5996b9ad-2841-4995-a7d1-288370c47003',
    basePrice: 1202,
    dateFrom: '2026-11-05T11:19:04.981Z',
    dateTo: '2026-11-06T12:44:04.981Z',
    destination: '093fa630-bce9-40e5-9154-1066b594078a',
    isFavorite: false,
    offers: [],
    type: 'sightseeing'
  },
  {
    id: '4ee27775-3733-46ba-8c86-bb67d50b3024',
    basePrice: 7132,
    dateFrom: '2026-11-07T00:08:04.981Z',
    dateTo: '2026-11-07T20:38:04.981Z',
    destination: '51bd648b-6268-4216-9f11-f9c3e74fc2d5',
    isFavorite: false,
    offers: [],
    type: 'check-in'
  },
  {
    id: 'db786e14-8147-4762-8028-974fb17771d9',
    basePrice: 2158,
    dateFrom: '2026-11-09T13:14:04.981Z',
    dateTo: '2026-11-10T14:47:04.981Z',
    destination: 'caf5643e-452e-477a-954b-9a7c0545d4f8',
    isFavorite: false,
    offers: [
      'ed05fbf6-638e-4152-9f07-34a86dbe082e',
      '8344b8f7-af9d-48bc-87ff-275c7c153e40'
    ],
    type: 'check-in'
  },
  {
    id: '9baeb130-4837-4fed-b39f-190f529e663e',
    basePrice: 4278,
    dateFrom: '2026-11-12T12:14:04.981Z',
    dateTo: '2026-11-13T21:16:04.981Z',
    destination: 'd1fd6919-a28d-4e5b-82f3-93dbae131124',
    isFavorite: false,
    offers: [
      'a077c526-38f1-452c-ae9a-fa33724e86b4',
      'c1f8fce3-1d40-4d43-86f9-4b2a7d36cc19'
    ],
    type: 'restaurant'
  },
  {
    id: 'e4920a1f-878f-4016-bd2e-f466ac256913',
    basePrice: 222,
    dateFrom: '2026-11-14T06:33:04.981Z',
    dateTo: '2026-11-14T14:08:04.981Z',
    destination: '9a948a58-1b1c-424e-a760-ca37f3ecbd2a',
    isFavorite: false,
    offers: [
      '49ca6217-9577-4509-9833-483c9a0cde38',
      'f352b2eb-9ded-4502-8320-82f55485163c'
    ],
    type: 'train'
  },
  {
    id: '0ba2fea1-0c14-40f2-bb1c-2aa356490b2e',
    basePrice: 1728,
    dateFrom: '2026-11-16T12:12:04.981Z',
    dateTo: '2026-11-17T23:22:04.981Z',
    destination: 'd1fd6919-a28d-4e5b-82f3-93dbae131124',
    isFavorite: false,
    offers: [],
    type: 'sightseeing'
  },
  {
    id: '6762e1ce-0f23-4a2a-819f-66f158af3107',
    basePrice: 7242,
    dateFrom: '2026-11-19T04:30:04.981Z',
    dateTo: '2026-11-20T04:41:04.981Z',
    destination: 'd1fd6919-a28d-4e5b-82f3-93dbae131124',
    isFavorite: true,
    offers: [],
    type: 'sightseeing'
  },
  {
    id: 'd2559812-390a-4b05-9f6f-bb0bbf0662e4',
    basePrice: 5204,
    dateFrom: '2026-11-20T13:28:04.981Z',
    dateTo: '2026-11-22T07:34:04.981Z',
    destination: '6eaea577-4f88-42f7-b1cf-8c026673a757',
    isFavorite: false,
    offers: [],
    type: 'sightseeing'
  },
  {
    id: 'c789df1c-3745-4139-8ee0-078f69e7ed70',
    basePrice: 371,
    dateFrom: '2026-11-23T04:39:04.981Z',
    dateTo: '2026-11-24T20:47:04.981Z',
    destination: '51bd648b-6268-4216-9f11-f9c3e74fc2d5',
    isFavorite: false,
    offers: [],
    type: 'restaurant'
  },
  {
    id: '6810ffde-da9d-4918-8a4f-68aecbc9ad99',
    basePrice: 8657,
    dateFrom: '2026-11-26T01:32:04.981Z',
    dateTo: '2026-11-27T10:13:04.981Z',
    destination: '610e615d-2015-4a8e-b084-774599c31128',
    isFavorite: true,
    offers: [
      '1ad63188-edcf-4ac3-8f19-4fc1747fbd47',
      '66bba190-b71d-4465-beb5-bb95bc4966c5',
      '5567879d-6773-42ea-becf-f51363da9d01',
      '48b2e704-8819-4e40-b066-ee3702a84d70',
      'db905278-2204-4521-acf0-b521063b058f'
    ],
    type: 'ship'
  },
  {
    id: 'ec6f3dd8-3c9b-4ae5-ba80-f623cbfea22a',
    basePrice: 8698,
    dateFrom: '2026-11-29T00:28:04.981Z',
    dateTo: '2026-11-29T12:48:04.981Z',
    destination: '6eaea577-4f88-42f7-b1cf-8c026673a757',
    isFavorite: true,
    offers: [
      'db9be52f-5649-4fde-8a6c-1d24fec50043'
    ],
    type: 'drive'
  },
  {
    id: '2500657c-776b-471f-a48c-61c24d3dfb6d',
    basePrice: 3088,
    dateFrom: '2026-11-30T18:34:04.981Z',
    dateTo: '2026-12-02T11:03:04.981Z',
    destination: 'f952899d-00db-498e-b493-2f050030a8c9',
    isFavorite: true,
    offers: [
      '57464e24-27dd-46e0-91f1-6d696e640283',
      'b219c627-829c-4b55-9f1f-425a2283677b',
      'c6b09dc6-284e-47ee-96ee-691be8960c22'
    ],
    type: 'flight'
  },
  {
    id: '1050a7db-6e76-4546-8512-541bbbc7f819',
    basePrice: 7102,
    dateFrom: '2026-12-03T16:33:04.981Z',
    dateTo: '2026-12-05T11:32:04.981Z',
    destination: '4698bc5b-3c2e-4c4f-922b-efab2bf81066',
    isFavorite: true,
    offers: [
      '0945eaff-649d-479e-9c19-e01d63752250',
      '301d4fab-5c37-41ba-832d-45658d5d8dd8',
      '55b0dd06-6c90-4d6b-bd87-ec86df7aa1ce'
    ],
    type: 'bus'
  },
  {
    id: '544a6b61-84c1-4ec4-861d-7c9865f19bf2',
    basePrice: 9214,
    dateFrom: '2026-12-06T11:38:04.981Z',
    dateTo: '2026-12-08T04:01:04.981Z',
    destination: 'f952899d-00db-498e-b493-2f050030a8c9',
    isFavorite: false,
    offers: [],
    type: 'sightseeing'
  },
  {
    id: 'abdf27d0-906f-46c6-ad34-eb21f2e01066',
    basePrice: 6837,
    dateFrom: '2026-12-09T21:40:04.981Z',
    dateTo: '2026-12-11T13:20:04.981Z',
    destination: '4698bc5b-3c2e-4c4f-922b-efab2bf81066',
    isFavorite: false,
    offers: [
      '49ca6217-9577-4509-9833-483c9a0cde38',
      'f352b2eb-9ded-4502-8320-82f55485163c'
    ],
    type: 'train'
  },
  {
    id: 'a6790360-424b-40d3-8120-ebc02fdad83d',
    basePrice: 5441,
    dateFrom: '2026-12-11T20:27:04.981Z',
    dateTo: '2026-12-13T00:46:04.981Z',
    destination: 'f9595216-529d-46f1-8293-961b9361fbcd',
    isFavorite: false,
    offers: [],
    type: 'bus'
  },
  {
    id: '66fd86a0-8be0-4321-873d-5a4f7ec5ee04',
    basePrice: 5821,
    dateFrom: '2026-12-14T13:41:04.981Z',
    dateTo: '2026-12-15T06:31:04.981Z',
    destination: '610e615d-2015-4a8e-b084-774599c31128',
    isFavorite: false,
    offers: [],
    type: 'taxi'
  },
  {
    id: '46d3fc7e-ba34-4a4a-bd39-1b590830e1c1',
    basePrice: 2331,
    dateFrom: '2026-12-16T12:27:04.981Z',
    dateTo: '2026-12-18T08:45:04.981Z',
    destination: '51bd648b-6268-4216-9f11-f9c3e74fc2d5',
    isFavorite: true,
    offers: [
      '9d17d9df-45e9-4d99-971c-5f25fee4fbe1',
      'db9be52f-5649-4fde-8a6c-1d24fec50043'
    ],
    type: 'drive'
  },
  {
    id: '1ccbbb17-7298-4d34-896e-ac96ed07fa2b',
    basePrice: 6368,
    dateFrom: '2026-12-18T23:37:04.981Z',
    dateTo: '2026-12-19T23:27:04.981Z',
    destination: 'f9595216-529d-46f1-8293-961b9361fbcd',
    isFavorite: true,
    offers: [
      '8d9ce7b5-ad46-4f1a-90aa-618b01c15392',
      'cfee2f1a-d78a-4883-8649-8f71228f4a06',
      '4b5c2c70-e977-4cd5-b00a-4568087ade53',
      'ed05fbf6-638e-4152-9f07-34a86dbe082e',
      '8344b8f7-af9d-48bc-87ff-275c7c153e40'
    ],
    type: 'check-in'
  },
  {
    id: '1d5f1a59-a597-4ef3-97aa-5f5429411bd9',
    basePrice: 8359,
    dateFrom: '2026-12-21T07:40:04.981Z',
    dateTo: '2026-12-23T02:32:04.981Z',
    destination: '9a948a58-1b1c-424e-a760-ca37f3ecbd2a',
    isFavorite: false,
    offers: [
      'db9be52f-5649-4fde-8a6c-1d24fec50043'
    ],
    type: 'drive'
  },
  {
    id: '3e1024d2-f5c1-4476-ac16-bcecdfa16b69',
    basePrice: 264,
    dateFrom: '2026-12-25T03:20:04.981Z',
    dateTo: '2026-12-26T18:58:04.981Z',
    destination: '610e615d-2015-4a8e-b084-774599c31128',
    isFavorite: false,
    offers: [
      '50b3faaf-7aad-4c57-9a5b-22b198e00503',
      '33733732-ab04-4db3-905b-edbcbadae9bc',
      'aa2297ff-ece8-4ee3-b91f-34fcc058862b',
      '2a9aa04d-1cb4-438d-9f1c-e0aa861fdac7'
    ],
    type: 'taxi'
  },
  {
    id: 'a686ad0a-0908-4c78-a928-75bf6b93da14',
    basePrice: 4124,
    dateFrom: '2026-12-27T15:10:04.981Z',
    dateTo: '2026-12-29T14:48:04.981Z',
    destination: '093fa630-bce9-40e5-9154-1066b594078a',
    isFavorite: false,
    offers: [
      'aa2297ff-ece8-4ee3-b91f-34fcc058862b',
      '2a9aa04d-1cb4-438d-9f1c-e0aa861fdac7'
    ],
    type: 'taxi'
  }
];

const pickRandomPoints = (count) => {
  const availablePoints = [...MOCK_POINTS];

  return Array.from({length: count}, () => {
    const index = Math.floor(Math.random() * availablePoints.length);

    return availablePoints.splice(index, 1)[0];
  });
};

export {pickRandomPoints};
