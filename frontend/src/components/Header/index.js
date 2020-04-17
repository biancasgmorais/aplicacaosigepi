import React from 'react';
import { MdExitToApp } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/action';

import { Container, Content, Profile } from './styles';

import logo from '~/assets/dash.png';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="SIGEPI's" />
          <Link to="/modules">SIGEPI</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Bem-vind@, {profile.name}</strong>
              <button type="button" onClick={handleSignOut}>
                <MdExitToApp color="#99cc33" size={25} />
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
