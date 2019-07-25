import React, { Component } from 'react';
import { Spring, animated } from 'react-spring/renderprops';
import styled from 'styled-components';
import {
  Header,
  FieldGroup,
  Fields,
  Field
} from 'components/account/accountSubcomponents';
import {
  $white,
  $blue
} from 'styles/colors';
import { disableHighlight } from 'styles/mixins';

export class MembershipCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areTermsShown: false,
    };
    this.handleCancel = this.handleCancel.bind(this);
  }

  // params: event, id
  handleCancel() {
    console.log('CANCEL MEMBERSHIP');
    // console.log(id, event.target);
  }

  render() {
    const {
      idx,
      title,
      memberName,
      status,
      renewalPeriod,
      renewalDate,
      price,
      terms,
    } = this.props;

    const { areTermsShown } = this.state;

    const CardWrapper = styled.div`
      background: ${$white};
      border: 1px solid rgba(82, 95, 127, 0.3);
      padding: 0px 16px 16px;
      margin-bottom: 32px;
      width: 311px;
      position: relative;
    `;

    return (
      <CardWrapper>
        <Header>{title}</Header>
        <Fields>
          <FieldGroup>
            <Field label="Member Name" value={memberName} />
            <Field label="Status" value={status} />
          </FieldGroup>
          <FieldGroup>
            <Field label="Renewal Period" value={renewalPeriod} />
            <Field label="Renewal Date" value={renewalDate} />
            <Field label="Price" value={price} />
          </FieldGroup>
          <FieldGroup>
            <SecondaryBtn onClick={() => this.setState({ areTermsShown: !areTermsShown })}>
              {areTermsShown ? 'hide terms' : 'view terms'}
            </SecondaryBtn>
            <ActionBtn onClick={event => this.handleCancel(event, idx)}>
              cancel membership
            </ActionBtn>
          </FieldGroup>
        </Fields>
        <TermsField terms={terms} areTermsShown={areTermsShown} />
      </CardWrapper>
    );
  }
}

export const ActionBtn = styled.div`
  letter-spacing: 0.6px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.15s ease;
  padding: 6px;
  border-radius: 4px;
  ${disableHighlight}
  color: ${$blue};
  &:hover {
    background: rgba(69, 178, 232, 0.1);
  }
`;

export const SecondaryBtn = styled(ActionBtn)`
  color: rgba(82, 95, 127, 0.8);
  &:hover {
    color: rgba(82, 95, 127, 1);
    background: rgba(82, 95, 127, 0.1);
  }
`;

export class TermsField extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const TermsWrapper = styled(animated.div)`
      overflow: scroll;
    `;

    const TermsSection = styled.div`
      margin: 24px 0px;
      &:first-child {
        margin-top: 0px;
      }
      &:last-child {
        margin-bottom: 0px;
      }
    `;

    const { terms, areTermsShown } = this.props;

    return (
      <Spring
        native
        reset={areTermsShown}
        reverse={areTermsShown}
        from={{
          opacity: areTermsShown ? 1 : 0,
          height: areTermsShown ? 309 : 0,
          padding: areTermsShown ? 8 : 0,
          marginTop: areTermsShown ? 8 : 0,
          border: areTermsShown ? 1 : 0,
        }}
        to={{
          opacity: 0,
          height: 0,
          padding: 0,
          marginTop: 0,
          border: 0,
        }}
        config={{ mass: 1, tension: 450, friction: 45 }}
      >
        {({
          opacity,
          height,
          padding,
          marginTop,
          border,
        }) => (
          <TermsWrapper
            style={{
              opacity,
              height,
              marginTop,
              padding: padding.interpolate(p => `${p}px 8px`),
              border: border.interpolate(b => `${b}px solid rgba(82, 95, 127, 0.2)`),
            }}
          >
            {terms.split('\n').filter(chunk => !!chunk).map((section, idx) => (
              <TermsSection key={`section_${idx + 1}`}>{section}</TermsSection>
            ))}
          </TermsWrapper>
        )}
      </Spring>
    );
  }
}

// !KEEP!
// export function ConfirmCancellation({ isVisible, isCancelTooltipOpen, setIsCancelTooltipOpen }) {
//   const ConfirmCancellationWrapper = styled.div`
//     display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
//     flex-direction: column;
//     align-items: center;
//     justify-content: space-between;
//     border-radius: 6px;
//     box-shadow: 0px 4px 6px rgba(50, 50, 93, 0.11), 0px 1px 3px rgba(0, 0, 0, 0.08);
//     font-size: 14px;
//     padding: 16px;
//     background: #fff;
//     position: absolute;
//     bottom: -80px;
//     right: 8px;
//     z-index: 9;
//   `;

//   const Prompt = styled.div`
//     margin-bottom: 8px;
//   `;

//   const Options = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-around;
//     width: 80%;
//   `;

//   const TooltipButton = styled.div`
//     font-size: 14px;
//     border: 1px solid rgba(82, 95, 127, 0.5);
//     border-radius: 16px;
//     padding: 6px 16px;
//     cursor: pointer;
//     font-family: 'Apercu Med';
//     ${disableHighlight}
//   `;

//   const No = styled(TooltipButton)`
//     color: color: rgba(82, 95, 127, 0.9);
//     background: #fff;
//   `;

//   const Yes = styled(TooltipButton)`
//     border: none;
//     color: #fff;
//     background: #e01e5a;
//   `;

//   return (
//     <ConfirmCancellationWrapper isVisible={isVisible}>
//       <Prompt>Do you really want to cancel this membership?</Prompt>
//       <Options>
//         <No onClick={() => setIsCancelTooltipOpen(false)}>Nevermind</No>
// <Yes
//   onClick={() => console.log('EMIT: { type: `CANCEL_MEMBERSHIP` }, && CLOSE_TOOLTIP ')}
// >
//   Yes, Cancel
// </Yes>
//       </Options>
//       <Backdrop
//         isRendered={isCancelTooltipOpen}
//         onClick={() => setIsCancelTooltipOpen(false)}
//       />
//     </ConfirmCancellationWrapper>
//   );
// }
