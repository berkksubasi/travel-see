import { forwardRef } from 'react'
import type { ForwardedRef } from 'react'

import { Pressable } from 'react-native'
import { ScaleDecorator, ShadowDecorator } from 'react-native-draggable-flatlist'


import { IconButton } from '../../actions/IconButton'
import { Stack, XStack } from '../../primitives/Stack'

import type { StackProps } from '@tamagui/web/types/types'
import type { PressableProps, View } from 'react-native'
import type { GetProps } from 'tamagui'

export type ISortableCellProps = StackProps & {
  isEditing?: boolean
  shadowProps?: Omit<GetProps<typeof ShadowDecorator>, 'children'>
  scaleProps?: Omit<GetProps<typeof ScaleDecorator>, 'children'>
  pressableProps?: Omit<PressableProps, 'children'>
  drag: () => void
  isActive: boolean
  onDeletePress?: () => void
}

export type ISortableCellRef = View

function BaseSortableCell(
  {
    isEditing = false,
    drag,
    isActive,
    shadowProps = {},
    scaleProps = { activeScale: 0.9 },
    onDeletePress,
    ...rest
  }: ISortableCellProps,
  ref: ForwardedRef<View> | undefined
) {
  return (
    <ShadowDecorator {...shadowProps}>
      <ScaleDecorator {...scaleProps}>
        <XStack width="100%" alignItems="center">
          {isEditing && (
            <IconButton
              onPress={onDeletePress}
              // @todo
              icon="AppleIcon"
              variant="destructive"
            />
          )}

          <Stack flex={1} {...rest} />

          {/* Don't use `Stack.onLongPress` as it will only be called after `onPressOut` */}
          {isEditing && (
            <Pressable ref={ref} onLongPress={drag} disabled={isActive}>
              {/* @todo */}
              <IconButton icon="AppleIcon" />
            </Pressable>
          )}
        </XStack>
      </ScaleDecorator>
    </ShadowDecorator>
  )
}

export const SortableCell = forwardRef(BaseSortableCell) as typeof BaseSortableCell
