import CaseDetailsMain from '@/components/case-details/CaseDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const dynamicCaseDetailsPage = ({ params }: { params: { id: string } }) => {
    const id = params.id
    return (
        <>
             <Wrapper>
                <main>
                <CaseDetailsMain id={id}/>
                </main>
            </Wrapper>
        </>
    );
};

export default dynamicCaseDetailsPage;