import React from 'react';

import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList>
        <Scroll>
          <Notification unread>
            <p>Aqui vai qualquer coisa1</p>
            <time>há 2 dias atrás</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Aqui vai qualquer coisa2</p>
            <time>há 3 dias atrás</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Aqui vai qualquer coisa3</p>
            <time>há 4 dias atrás</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Aqui vai qualquer coisa4</p>
            <time>há 5 dias atrás</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Aqui vai qualquer coisa5</p>
            <time>há 6 dias atrás</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Aqui vai qualquer coisa4</p>
            <time>há 7 dias atrás</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Aqui vai qualquer coisa4</p>
            <time>há 7 dias atrás</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Aqui vai qualquer coisa4</p>
            <time>há 7 dias atrás</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Aqui vai qualquer coisa4</p>
            <time>há 7 dias atrás</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Aqui vai qualquer coisa4</p>
            <time>há 7 dias atrás</time>
            <button type="button">Marcar como lida</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
