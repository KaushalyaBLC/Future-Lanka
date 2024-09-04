export function getCapitalizedFirstName(fullName) {
    const nameParts = fullName.trim().split(' ');
    const firstName = nameParts[0];
    return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
}