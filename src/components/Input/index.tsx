import React, {InputHTMLAttributes} from 'react';
import { IconBaseProps } from 'react-icons';
import { Section } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input:React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  return(
    <Section>
      { Icon && <Icon size={20} /> }
      <input {...rest}/>
    </Section>
  );
}

export default Input;