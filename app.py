import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(
    page_title="Peta Raport Nelayan",
    layout="wide"
)

components.iframe(
    "https://ikhsanruntukahu.github.io/20260701_web-map-raport-nelayan/",
    height=900,
    scrolling=True
)


