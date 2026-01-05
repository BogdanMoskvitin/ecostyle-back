"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    async afterCreate(event) {
        const { result } = event;
        try {
            await strapi.plugin('email').service('email').send({
                to: process.env.SMTP_USER,
                subject: 'Новая заявка с сайта EcoStyle',
                html: `
          <h2>Новая заявка</h2>
          <p><strong>Имя:</strong> ${result.name}</p>
          <p><strong>Телефон:</strong> ${result.phone}</p>
          <p><strong>Сообщение:</strong> ${result.message}</p>
        `,
            });
        }
        catch (error) {
            strapi.log.error('Ошибка отправки email:', error);
        }
    },
};
