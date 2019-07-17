import React, { useState, useContext } from 'react';
// import { useSpring } from 'react-spring';
import UserContext from 'components/userData';
import styled from 'styled-components';
import {
  AccountWrapper,
  SectionTitle,
  Card,
  Header,
  Fields,
  FieldGroup,
  Field
} from 'components/account/accountSubcomponents';
import {
  TermsField
} from 'components/membership/membershipSubcomponents';
import { $blue, $text1 } from 'styles/colors';
import { disableHighlight } from 'styles/mixins';

function Membership() {
  const { memberships, purchases } = useContext(UserContext);
  const [areTermsShown, setAreTermsShown] = useState(false);
  const [isCancelTooltipOpen, setIsCancelTooltipOpen] = useState(false);

  const SectionWrapper = styled(AccountWrapper)``;

  const PurchaseTable = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
    font-size: 14px;
  `;

  const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(82, 95, 127, 0.2);
    padding: 8px 0px;
    color: rgba(82, 95, 127, 0.85);
    span {
      width: 86px;
      padding-right: 16px;
      &:first-child {
        width: 80px;
        padding-left: 2.5px;
      }
      &:last-child {
        text-align: right;
        width: 40px;
        padding-right: 2.5px;
      }
    }
  `;

  const ColumnNames = styled(Row)`
    color: rgba(82, 95, 127, 0.6);
  `;

  const CancelBtn = styled.div`
    color: ${$blue};
    letter-spacing: 0.6px;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.15s ease;
    padding: 6px;
    border-radius: 4px;
    ${disableHighlight}
    &:hover {
      background: rgba(69, 178, 232, 0.1);
    }
  `;

  const TermsBtn = styled(CancelBtn)`
    color: ${$text1};
    display: flex;
    justify-content: space-between;
    &:hover {
      background: rgba(82, 95, 127, 0.1);
    }
  `;

  // params: event, id
  function handleCancel() {
    // console.log(id, event.target);
    setIsCancelTooltipOpen(!isCancelTooltipOpen);
  }

  return (
    <>
      <SectionWrapper>
        <SectionTitle>memberships</SectionTitle>
        <div className="membership-cards">
          {memberships.map(({
            title,
            memberName,
            status,
            renewalPeriod,
            renewalDate,
            price,
            terms,
          }, idx) => (
            <Card key={`membership_card_${idx + 1}`}>
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
                  <TermsBtn onClick={() => setAreTermsShown(!areTermsShown)}>
                    {areTermsShown ? 'hide terms' : 'view terms'}
                  </TermsBtn>
                  <CancelBtn onClick={event => handleCancel(event, idx)}>
                    cancel membership
                  </CancelBtn>
                </FieldGroup>
              </Fields>
              <TermsField terms={terms} areTermsShown={areTermsShown} />
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>purchases</SectionTitle>
        <PurchaseTable>
          <ColumnNames>
            <span>Date</span>
            <span>Package</span>
            <span>Expires</span>
            <span>Price</span>
          </ColumnNames>
          {purchases.map(({
            purchaseDate,
            packageName,
            expirationDate,
            price,
          }, idx) => (
            <Row key={`purchase_${idx + 1}`}>
              <span>{purchaseDate}</span>
              <span>{packageName}</span>
              <span>{expirationDate}</span>
              <span>{price}</span>
            </Row>
          ))}
        </PurchaseTable>
      </SectionWrapper>
    </>
  );
}

export default Membership;
