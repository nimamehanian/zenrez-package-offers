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
import Dialog from '@material-ui/core/Dialog';
import { $blue, $text1 } from 'styles/colors';
import { disableHighlight } from 'styles/mixins';

function Membership() {
  const { memberships, purchases } = useContext(UserContext);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
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
                  <TermsBtn onClick={() => setIsTermsModalOpen(true)}>view terms</TermsBtn>
                  <CancelBtn>cancel membership</CancelBtn>
                </FieldGroup>
              </Fields>
              <TermsModal
                terms={terms}
                open={isTermsModalOpen}
                onClose={() => setIsTermsModalOpen(false)}
              />
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

function TermsModal({ terms, open, onClose }) {
  const TermsWrapper = styled.div`
    max-height: calc(100vh * 0.618);
    margin: 16px;
    padding: 8px;
    border-radius: 6px;
    border: 1px solid rgba(82, 95, 127, 0.2);
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
    <Dialog open={open} onClose={onClose}>
      <TermsWrapper>
        {terms.split('\n').filter(chunk => !!chunk).map((section, idx) => (
          <TermsSection key={`section_${idx + 1}`}>{section}</TermsSection>
        ))}
      </TermsWrapper>
    </Dialog>
  );
}

export default Membership;
