import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { Backdrop, disableHighlight } from 'styles/mixins';

export function TermsField({ terms, areTermsShown }) {
  const config = { mass: 1, tension: 450, friction: 45 };
  const [{ opacity }, setOpacity] = useSpring(() => ({ opacity: 0, config }));
  const [{ height }, setHeight] = useSpring(() => ({ height: 0, config }));
  const [{ padding }, setPadding] = useSpring(() => ({ padding: 0, config }));
  const [{ margin }, setMargin] = useSpring(() => ({ margin: 0, config }));
  const [{ border }, setBorder] = useSpring(() => ({ border: 0, config }));

  useEffect(() => {
    console.log('EFFECT RUN');
    setOpacity({ opacity: areTermsShown ? 1 : 0 });
    setHeight({ height: areTermsShown ? 309 : 0 });
    setMargin({ margin: areTermsShown ? 8 : 0 });
    setPadding({ padding: areTermsShown ? 8 : 0 });
    setBorder({ border: areTermsShown ? 1 : 0 });
  }, [areTermsShown]);

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

  return (
    <TermsWrapper
      style={{
        opacity,
        height,
        marginTop: margin,
        padding: padding.interpolate(p => `${p}px 8px`),
        border: border.interpolate(b => `${b}px solid rgba(82, 95, 127, 0.2)`),
      }}
    >
      {terms.split('\n').filter(chunk => !!chunk).map((section, idx) => (
        <TermsSection key={`section_${idx + 1}`}>{section}</TermsSection>
      ))}
    </TermsWrapper>
  );
}

export function ConfirmCancellation({ isVisible, isCancelTooltipOpen, setIsCancelTooltipOpen }) {
  const ConfirmCancellationWrapper = styled.div`
    display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 6px;
    box-shadow: 0px 4px 6px rgba(50, 50, 93, 0.11), 0px 1px 3px rgba(0, 0, 0, 0.08);
    font-size: 14px;
    padding: 16px;
    background: #fff;
    position: absolute;
    bottom: -80px;
    right: 8px;
    z-index: 9;
  `;

  const Prompt = styled.div`
    margin-bottom: 8px;
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

  return (
    <ConfirmCancellationWrapper isVisible={isVisible}>
      <Prompt>Do you really want to cancel this membership?</Prompt>
      <Options>
        <No onClick={() => setIsCancelTooltipOpen(false)}>Nevermind</No>
        <Yes onClick={() => console.log('EMIT ACTION: { type: `CANCEL_MEMBERSHIP` }, AND CLOSE TOOLTIP ')}>Yes, Cancel</Yes>
      </Options>
      <Backdrop
        isRendered={isCancelTooltipOpen}
        onClick={() => setIsCancelTooltipOpen(false)}
      />
    </ConfirmCancellationWrapper>
  );
}
