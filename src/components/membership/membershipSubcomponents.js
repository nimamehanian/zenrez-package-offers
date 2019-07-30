import React, { Component, useEffect } from 'react';
import { Spring, animated } from 'react-spring/renderprops';
import { useSpring, animated as a } from 'react-spring';
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
      isCancelTooltipVisible: false,
    };
    this.setIsCancelTooltipVisible = this.setIsCancelTooltipVisible.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  setIsCancelTooltipVisible(isCancelTooltipVisible) {
    this.setState({ isCancelTooltipVisible });
  }

  handleCancel() {
    console.log('CANCEL MEMBERSHIP');
    this.setIsCancelTooltipVisible(true);
    this.setState({ areTermsShown: false });
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

    const { areTermsShown, isCancelTooltipVisible } = this.state;

    const CardWrapper = styled.div`
      background: ${$white};
      border: 1px solid rgba(82, 95, 127, 0.3);
      padding: 0px 16px 16px;
      margin-bottom: 32px;
      width: 311px;
      position: relative;
      ${disableHighlight}
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
        <ConfirmCancellation
          isCancelTooltipVisible={isCancelTooltipVisible}
          setIsCancelTooltipVisible={this.setIsCancelTooltipVisible}
        />
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

export function ConfirmCancellation({ isCancelTooltipVisible, setIsCancelTooltipVisible }) {
  const ConfirmCancellationWrapper = styled(a.div)`
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 6px;
    box-shadow: 0px 4px 6px rgba(50, 50, 93, 0.11), 0px 1px 3px rgba(0, 0, 0, 0.08);
    font-size: 14px;
    padding: 16px;
    background: #fff;
    position: absolute;
    bottom: 50px;
    right: 8px;
    z-index: 9;
  `;

  const Backdrop = styled.div`
    background: rgba(0, 0, 0, 0);
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: 8;
    display: ${({ isRendered }) => (isRendered ? 'block' : 'none')}
  `;

  const Prompt = styled.div`
    margin-bottom: 8px;
    ${disableHighlight}
  `;

  const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 80%;
  `;

  const TooltipButton = styled.div`
    font-size: 14px;
    border: 1px solid rgba(82, 95, 127, 0.5);
    border-radius: 16px;
    padding: 6px 16px;
    cursor: pointer;
    font-family: 'Apercu Med';
    ${disableHighlight}
  `;

  const No = styled(TooltipButton)`
    color: color: rgba(82, 95, 127, 0.9);
    background: #fff;
  `;

  const Yes = styled(TooltipButton)`
    border: none;
    color: #fff;
    background: #e01e5a;
  `;

  const config = { mass: 1, tension: 400, friction: 32 };
  const [{ opacity }, setOpacity] = useSpring(() => ({ opacity: 0, config }));
  const [{ offsetY }, setOffsetY] = useSpring(() => ({ offsetY: 16, config }));

  useEffect(() => {
    setOpacity({ opacity: isCancelTooltipVisible ? 1 : 0 });
    setOffsetY({ offsetY: isCancelTooltipVisible ? 0 : 16 });
  }, [isCancelTooltipVisible]);

  // <Backdrop> must be defined within this component so z-index scope applies
  return (
    <>
      <ConfirmCancellationWrapper
        style={{
          opacity,
          transform: offsetY.interpolate(y => `translateY(${y}px)`),
          display: isCancelTooltipVisible ? 'flex' : 'none',
        }}
      >
        <Prompt>Do you really want to cancel this membership?</Prompt>
        <Options>
          <No onClick={() => setIsCancelTooltipVisible(false)}>Nevermind</No>
          <Yes
            onClick={() => console.log('EMIT: { type: `CANCEL_MEMBERSHIP` }, && CLOSE_TOOLTIP ')}
          >
            Yes, Cancel
          </Yes>
        </Options>
      </ConfirmCancellationWrapper>
      <Backdrop
        isRendered={isCancelTooltipVisible}
        onClick={() => setIsCancelTooltipVisible(false)}
      />
    </>
  );
}
