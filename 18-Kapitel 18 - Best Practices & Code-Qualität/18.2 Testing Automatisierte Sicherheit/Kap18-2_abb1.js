describe('slugify helper',function (){
it('should convert spaces to hyphens'，function（）{
const result = slugify('My Great Post');
});
it('should remove special characters'，function
({
const result = slugify('Title with #!$%');
expect(result).toBe('title-with');
});
});
