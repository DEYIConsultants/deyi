import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateContact } from '../lib/contact.ts';

const valid = { name: 'Test Client', email: 'client@example.com', message: 'I need structural support for an addition.' };

test('accepts the original three-field form and trims values', () => {
  assert.deepEqual(validateContact({ ...valid, name: ' Test Client ' }), { ...valid, service: '', city: '' });
});

test('accepts structural service and project city', () => {
  assert.deepEqual(validateContact({ ...valid, service: 'permit', city: 'Irvine' }), { ...valid, service: 'permit', city: 'Irvine' });
});

test('rejects missing, malformed, or incorrectly typed fields', () => {
  for (const payload of [null, [], {}, { ...valid, name: ' ' }, { ...valid, email: 'invalid' }, { ...valid, message: '' }, { ...valid, email: ['client@example.com'] }, { ...valid, service: 'unavailable-service' }, { ...valid, city: {} }]) {
    assert.equal(validateContact(payload), null);
  }
});

test('rejects oversized fields and newline injection into reply details', () => {
  for (const payload of [{ ...valid, name: 'a'.repeat(101) }, { ...valid, message: 'a'.repeat(5001) }, { ...valid, city: 'a'.repeat(101) }, { ...valid, email: 'client@example.com\nBcc: other@example.com' }, { ...valid, name: 'Client\r\nBcc: other@example.com' }]) {
    assert.equal(validateContact(payload), null);
  }
});
