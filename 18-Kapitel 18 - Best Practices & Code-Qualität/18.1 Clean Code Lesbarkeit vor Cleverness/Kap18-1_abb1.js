function validateMemberEmail(email) {
if（
(!email)
throw new errors.ValidationError('Email is required');
if
(!validator.isEmail(email)) {
throw new errors.ValidationError('Invalid email format');
returntrue;
