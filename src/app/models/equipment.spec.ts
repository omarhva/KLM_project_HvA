import {EquipmentModel} from './equipmentModel';

describe('Equipment', () => {
  it('should create an instance', () => {
    expect(new EquipmentModel(1, "", "", "", 1, "", "", "")).toBeTruthy();
  });
});
