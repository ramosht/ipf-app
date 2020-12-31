import React from 'react'
import {theme} from '@styles/Theme'

import {Text} from '@typography/index'
import * as S from './styles'

type PostPreviewProps = {
    style?: any
}

const PostPreview: React.FC<PostPreviewProps> = ({ style }) => {
    return (
        <S.Wrapper style={{...style}}>
            <S.ThumbnailWrapper>
                <S.Thumbnail source={{uri: 'https://instagram.fsod2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/130759601_390616579057968_5894282263873656095_n.jpg?_nc_ht=instagram.fsod2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=q0K9muw-EjAAX_vMs02&tp=1&oh=a451cdaefef6b5c4dcd8b571d7448b6a&oe=6018C45E'}} />
            </S.ThumbnailWrapper>
            <S.TextWrapper>
                <Text weight="Bold" fontSize={10} color={theme.colors.primary}>Artigo</Text>
                <Text weight="Bold" fontSize={14} color={theme.colors.grey}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut</Text>
                <Text fontSize={10} color={theme.colors.grey}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut</Text>
            </S.TextWrapper>
        </S.Wrapper>
    )
}

export default PostPreview;