import React, { useCallback, useMemo, useRef } from "react";
import styles from "./BottomSheet.styles.js";
import { View, Text, StyleSheet, Button } from "react-native";

import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import BottomSheetBackdrop from "./BottomSheetBackdrop";
import { useEffect } from "react";

const BottomSheet = React.forwardRef(({ bottomSheetRef, children }, ref) => {
  // ref
  // const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // callbacks
  // const handlePresentModalPress = useCallback(() => {
  //   bottomSheetRef.current?.present();
  // }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  useEffect(() => {});

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <BottomSheetModal
          ref={ref}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          backdropComponent={BottomSheetBackdrop}
        >
          <View style={styles.contentContainer}>{children}</View>

          {/* <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View> */}
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
});

export default BottomSheet;
