type EnMessages = typeof import('../app/messages/en.json');
type ThMessages = typeof import('../app/messages/th.json');

declare interface IntlMessages extends EnMessages, ThMessages {}
