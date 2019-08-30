import React from 'react'

import * as S from './styled'

const PostItem = () => (
    <S.PostItemLink>
        <S.PostItemWrapper>
            <S.PostItemTag background='#47650b'>Misc</S.PostItemTag>
            <S.PostItemInfo>
                <S.PostItemDate>30 de Agosto de 2019 * 4 min de leitura</S.PostItemDate>
                <S.PostItemTitle>
                    Diga não ao Medium: tenha sua própria plataforma
                </S.PostItemTitle>
                <S.PostItemDescription>
                    Algumas razões para você ter sua propria plataforma ao invés de
                    soluções como Medium.
                    </S.PostItemDescription>
            </S.PostItemInfo>
        </S.PostItemWrapper>
    </S.PostItemLink>
)

export default PostItem