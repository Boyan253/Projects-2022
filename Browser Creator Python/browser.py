from PyQt5 import QtCore, QtGui, QtWidgets, QtWebEngineWidgets

class Browser(QtWidgets.QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Python Web Browser")
        self.setGeometry(100, 100, 800, 600)
        layout = QtWidgets.QVBoxLayout(self)

        # Create a toolbar
        toolbar = QtWidgets.QToolBar()
        layout.addWidget(toolbar)

        # Add a "Go Back" button to the toolbar
        self.back_action = QtWidgets.QAction(QtGui.QIcon("back.png"), "Go Back", self)
        self.back_action.triggered.connect(self.go_back)
        toolbar.addAction(self.back_action)

        # Add a "Go Forward" button to the toolbar
        self.forward_action = QtWidgets.QAction(QtGui.QIcon("forward.png"), "Go Forward", self)
        self.forward_action.triggered.connect(self.go_forward)
        toolbar.addAction(self.forward_action)

        # Add a "Refresh" button to the toolbar
        self.refresh_action = QtWidgets.QAction(QtGui.QIcon("refresh.png"), "Refresh", self)
        self.refresh_action.triggered.connect(self.refresh)
        toolbar.addAction(self.refresh_action)

        # Add an "URL Bar" to the toolbar
        self.url_bar = QtWidgets.QLineEdit()
        self.url_bar.returnPressed.connect(self.load_url)
        toolbar.addWidget(self.url_bar)

        # Create a QWebEngineView widget to display the web page
        self.view = QtWebEngineWidgets.QWebEngineView(self)
        self.view.setUrl(QtCore.QUrl("https://www.google.com"))
        layout.addWidget(self.view)
        self.show()

    def go_back(self):
        self.view.back()

    def go_forward(self):
        self.view.forward()

    def refresh(self):
        self.view.reload()

    def load_url(self):
        url = self.url_bar.text()
        if not url.startswith("http"):
            url = "http://" + url
        self.view.setUrl(QtCore.QUrl(url))

if __name__ == "__main__":
    app = QtWidgets.QApplication([])
    browser = Browser()
    app.exec_()
