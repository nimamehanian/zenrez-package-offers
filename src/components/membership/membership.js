import React, { useContext } from 'react';
import { UserContext } from 'components/userData';
// import { gql } from 'apollo-boost';
// import { useQuery } from 'react-apollo';
import styled from 'styled-components';
import { AccountWrapper, SectionTitle } from 'components/account/accountSubcomponents';
import { MembershipCard } from 'components/membership/membershipSubcomponents';

function Membership() {
  const { memberships, purchases } = useContext(UserContext);
  // const { data } = useQuery(gql`{

  // }`);

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
            <MembershipCard
              key={`membership_card_${idx + 1}`}
              idx={idx}
              title={title}
              memberName={memberName}
              status={status}
              renewalPeriod={renewalPeriod}
              renewalDate={renewalDate}
              price={price}
              terms={terms}
            />
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
