"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: env('SMTP_USER'),
                    pass: env('SMTP_PASS'),
                },
            },
            settings: {
                defaultFrom: 'EcoStyle <moskvitin.bg@gmail.com>',
                defaultReplyTo: 'moskvitin.bg@gmail.com',
            },
        },
    },
});
