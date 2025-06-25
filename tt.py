# ============================================================================
# Flora-AI Streamlit Application
# 
# A wellness platform that provides personalized meal plans and health insights.
# The application includes a landing page with user profiles and navigation.
# ============================================================================

import streamlit as st
from PIL import Image
import time

# =========================
# Configuration and Setup
# =========================

def initialize_app():
    """
    Initialize the Streamlit application with basic configuration
    and load necessary resources.
    """
    # Load and configure logo
    logo_path = "C:/Flora - AI/Flora - AI (logo)/Flora (8).png"
    logo = Image.open(logo_path)
    
    # Configure page settings
    st.set_page_config(
        page_title="Flora-AI",
        page_icon=logo,
        layout="wide"
    )
    
    return logo

# =========================
# UI Component Functions
# =========================

def create_header(logo):
    """
    Create the main header section with title and logo.
    
    Args:
        logo (PIL.Image): The application logo image
    """
    st.markdown(
        "<h1 style='text-align: center; color: #53cf3c; font-family: Sans-Serif;'>"
        "Welcome to Flora-AI</h1>",
        unsafe_allow_html=True
    )
    st.image(logo, width=200)

def create_landing_content():
    """
    Generate the main content for the landing page including
    mission statement and vision.
    """
    st.write(
        """
        *Flora-AI* is here to revolutionize your wellness journey! We provide personalized meal plans and health insights
        tailored to your lifestyle, dietary preferences, and health goals. Our mission is to make healthy living accessible
        and enjoyable for everyone, one meal at a time.
        """
    )
    
    st.write("### Our Vision")
    st.write(
        """
        At Flora-AI, we envision a world where everyone has access to tailored health and wellness solutions that empower them
        to live their best lives. With the power of AI and a focus on nutrition, we're creating a healthier future for the Arab world and beyond.
        """
    )

def create_navigation_button(label, page_name):
    """
    Create a styled navigation button with hover effects.
    
    Args:
        label (str): Button text
        page_name (str): Target page URL
    
    Returns:
        str: HTML code for the styled button
    """
    return f"""
    <style>
    .button_{page_name} {{
        text-align: center;
        background-color: #53cf3c;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.2s ease;
    }}
    .button_{page_name}:hover {{
        background-color: #45b02b;
        transform: scale(1.05);
    }}
    </style>
    <div class="button_{page_name}" onclick="window.location.href='/{}'">{label}</div>
    """.format(page_name, label)

def create_navigation_section():
    """
    Create the navigation section with styled buttons.
    """
    st.write("---")
    col1, col2, col3 = st.columns(3)
    
    with col1:
        st.markdown(create_navigation_button("My Diet", "My Diet"), unsafe_allow_html=True)
    with col2:
        st.markdown(create_navigation_button("Healthy Orders", "Healthy Orders"), unsafe_allow_html=True)
    with col3:
        st.markdown(create_navigation_button("Community", "Community"), unsafe_allow_html=True)

def create_footer():
    """
    Create the footer section with contact information and social media links.
    """
    st.write("---")
    st.markdown(
        """
        <div style='background-color: #96e55c; padding: 10px;'>
            <p style='text-align: center; font-size: 16px; color: white;'>
                Contact us: +962 7 7635 3378<br>
                Follow us on <a href='https://www.instagram.com/flora.aii?igsh=MzRlODBiNWFlZA==' target='_blank' style='color: white;'>Instagram</a> |
                <a href='https://www.facebook.com/profile.php?id=61562786355338' target='_blank' style='color: white;'>Facebook</a> |
                <a href='https://www.linkedin.com/company/flora-ai/' target='_blank' style='color: white;'>LinkedIn</a>
            </p>
        </div>
        """,
        unsafe_allow_html=True
    )

def create_sidebar(logo):
    """
    Create the sidebar with user profile information and points visualization.
    
    Args:
        logo (PIL.Image): The application logo image
    """
    st.sidebar.header("User Profile")
    st.sidebar.image(logo, width=100)
    
    # User information
    user_name = st.sidebar.text_input("User Name", "Your Name")
    user_points = st.sidebar.slider("Your Points", min_value=0, max_value=100, value=50)
    
    # Display user stats
    st.sidebar.write(f"Hello, *{user_name}! You have *{user_points} points**.")
    st.sidebar.write("### Progress Overview")
    
    # Animated progress bar
    progress_bar = st.sidebar.progress(0)
    for percent in range(user_points + 1):
        time.sleep(0.05)
        progress_bar.progress(percent)
    
    # Points visualization
    st.sidebar.write("### Points Visualization")
    sample_data = [user_points, 100 - user_points]
    st.sidebar.bar_chart(sample_data)

def create_call_to_action():
    """
    Create the call-to-action section with interactive elements.
    """
    if st.button("Start My Journey"):
        st.balloons()
        st.write("🎉 Congratulations! You're on your way to a healthier lifestyle with Flora-AI! 🎉")
    
    st.markdown(
        """
        <div style="text-align:center;">
            <p><i>Click any button to start your journey with Flora-AI and get personalized meal plans and health tips!</i></p>
        </div>
        """,
        unsafe_allow_html=True
    )

# =========================
# Main Application
# =========================

def main():
    """
    Main application entry point that orchestrates the UI components.
    """
    # Initialize application
    logo = initialize_app()
    
    # Create main UI components
    create_header(logo)
    create_landing_content()
    create_navigation_section()
    create_footer()
    
    # Create sidebar
    create_sidebar(logo)
    
    # Create call-to-action section
    create_call_to_action()

if  __name__ == "__main__":
    main()
