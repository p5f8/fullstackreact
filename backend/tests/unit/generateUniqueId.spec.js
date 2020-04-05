const generateUniqueId = require('../../src/utils/generateuniqueid')

describe('Generate Unique ID', () => {
    it('should generate an unique id', () => {

        console.log(generateUniqueId)

        const id = generateUniqueId();

        expect(id).toHaveLength(8)
    })
})